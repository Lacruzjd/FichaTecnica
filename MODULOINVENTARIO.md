# MODULO INVENTARIO:

## Entrada y salida de productos.

1.- Definir productos:
 
	Categorias: Aceites y Materias Grasas.
				Productos Lacteos => subcategorias: leche quesos
				Legumbres.
				Setas/Hongos.
				Verduras.
				Frutas.
				Cereales, harinas y masas.
				Pescado.
				Mariscos.
				Carnes => por animal, aves de corral, caza. 
				Bebidas => alcoholicas y no alcoholicas.
	
	Caracteristicas de los insumos:	
				Nombre, marca, lote, fecha de vencimiento, etiquetado nutricional... 
	
	Hay utilitarios: "no aplica por ahora".


1.1.- Gherkin: 

Feature: Definir de categoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Definir nueva categoria.
		Given: categoria nueva con nombre valido
		When se define la categoria		
		Then se muestra la categoria definida 

	Scenario: Listar Categorias.
		Given Categorias definida
		When se solicita listar
		Then se muesta listado de categorias

	Feature: Actualizar categoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Actualizar categoria. 
		Given: existe categoria
		When se actualzia el categoria 
		Them se muestra categoria actualizada.

Feature: Eliminar categoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Eliminar categoria 
		Given: existe categoria
		And no tiene insumos asociados
		When se elimina la categoria 
		Them se muestra categoria eliminada.

Feature: Definir subcategoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Definir nueva subcategoria.
		Given: Subcategoria nueva con nombre y caracteristicas validas.
		When se define la subcategoria		
		Then se muestra la subcategoria definida
		
Feature: Asociar subcategoria a categoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Asociar subcategoria a categoria.
		Given: subcategoria creada
		And categoria existente.
		When se seleciona la categoria
		and se agrega la subcategoria
		Then se muestra subcategoria asociada a categoria

Feature: Listar subcategorias.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Listar subcategorias.
		Given subcategorias existe
		When se solicita listar
		Then se muesta listado de subcategorias con categorias y demas caracteristicas.

Feature: Actualizar definicion subcategorias.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Actualizar subcategoria. 
		Given: existe subcategoria
		When se actualzia el subcategoria 
		Them se muestra subcategoria actualizada.

Feature: Eliminar subcategoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Eliminar subcategoria. 
		Given: existe subcategoria
		When se elimina el subcategoria 
		Them se muestra subcategoria eliminado.

Feature: Agregar insumos

	Scenario: Agregar nuevo insumo 
		Given: esta definido el insumo
		and creda la sucategoria
		When se crea y guarda el insumo
		Then se muesta insumo agregado.

Feature: Restar insumos
	Scenario: Restar cantidad del insumo 
		Given: esta disponible el insumo 
		and el total es menor o igual a la cantidad a restar
		When se resta la cantidad del insumo
		Then se resta la cantiad del total existente
		and se muestra cantidad del insumo extraido y el total actual.
