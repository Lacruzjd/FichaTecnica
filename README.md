# FichaTecnica

Requerimientos de la Ficha Tecnica
(SEGUIMIENTO DE LA PREPARACION DESDE LA SALIDA DEL PRODUCTO O MATERIA PRIMA DEL ALMACEN 
    HASTA EL ALMACENAJE DEL PRODUCTO FINAL EN STOCK).

    Rendimiento estandar.
    Kilos producidos.
    Kilos o unidades a comprar.
    Coto total del lote.
    Costo por porcion.
    Costo por kilo de produccion.


/********************************/

Feacture: Realizar Receta.

    Scenario:   Obtiene productos del almacen.

        Given:  Estado de los productos.
    
        When:   Inexistente.
        Them:   Reportar a encargado de almacen, no realizar receta.

        When:   Vencido o en mal estado.
        Them:   Descartar y reportar, Buscar otro en buen estado.

        When:   Accindente en la ejecucion.
        Them:   reportar a almacen.***

        When:   Disponible.
        Them:   Realizar Receta.


    Scenario: Acondiciona producto (Determinacion de Rendimientos y standar de compra).

        Guiven: Uso del producto.

        When:   Total.
        Them:   Pesar (pesoBruto), anotar en ficha.

        When:   Parcial.
        Them:   Pesar (pesoBruto), anotar en ficha;
                separar la parte util, pesar y anotar en ficha (usoNeto);

        When:   Resuso del descarte.
        Them:   Pesar y almacenar, reportar al almacen.***

        When:   Accidente en la ejecucion
        Them:   reportar (pesoBruto) del descartarte al almacen.***

    
    Scenario:   Almacenaje de preparacion pre coccion.

        when:   Preparacion terminada
        Them:   Guardar en Stock y fechar.

        When:   Accidente en la ejecucion
        Them:   Reportar al almacen.***


    Scenario:   Coccion y almacenaje.

        Given:  Estado de la preparacion.

        When:   En buen estado.
        Them:   Continuar coccion.

        When:   Producto termiando.
        Them:   Fraccionar (cantidadPorciones), pesar (pesoPorcion) etiquetar y guardar en stock.***
        
        When:   En mal estado, falla en la coccion o cualquier accidente.
        Them:   Descartar y reportar a almacen.***


    /*****************************/

    Calculos en FichaTecnica:

        Rendimiento estandar:
             rendimientoStandar = usoNeto / pesoComprado.

        Kilos Producidos:
            kilosProducidos = pesoPorcion*cantidadPorciones.

        Kilos a comprar de mercaderia:
            kilosComprar = cantidadPorcion * pesoPorcion * 1/rendimiento.
        
        Unidades a comprar:
            unidadesComprar = kilosComprar / pesoComprado.

        Costo total lote:
            costoTotalLote = usoNeto * rendimientoStandar * precioStandarUnidad.

            (precioStandarUnidad = precioProducto / PesoProducto.) informacion externa. 

        Costo por porcion:
            costoPorcion = costoTotalLote / cantidadPorciones.

        Costo por Kilo de producion:
           costoKiloProduccion = costoTotalLote / kilosProducidos.