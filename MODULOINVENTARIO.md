MODULO INVENTARIO:
Entrada y salida de productos.

1.- Definir productos:
 
	Categorias: Aceites y Materias Grasas.
				Productos Lacteos.
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

Feature: Definir insumo.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Definir nuevo insumo.
		Given: insumo nuevo con nombre y caracteristicas validas.
		When se define el insumo		
		Then se muestra el insumo definido
		
Feature: Asociar deficion del insumo a categoria.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Asociar el insumo a categoria.
		Given: insumo creado
		And categoria existente.
		When se seleciona la categoria
		and se agrega el insumo
		Then se muestra insumo asociado a categoria

Feature: Listar definicion del insumo.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Listar insumos.
		Given insumo existe
		When se solicita listar
		Then se muesta listado de ingredeintes con categorias y demas caracteristicas.

Feature: Actualizar definicion insumo.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Actualizar insumo. 
		Given: existe insumo
		When se actualzia el insumo 
		Them se muestra insumo actualizado.

Feature: Eliminar definicion insumo.

	Background:
		Given: Seccion iniciada por el usuario.

	Scenario: Eliminar definicion del insumo. 
		Given: existe insumo
		And cantidad inexistente
		When se elimina el insumo 
		Them se muestra insumo eliminado.


Feature: Agregar insumo

	Scenario: Agregar insumo 
		Given: esta definido el insumo 
		and insumo valido
		When se agrega el insumo 
		Then se muestra insumo agregado y cantidad total.

Feature: Restar insumo

	Scenario: Restar insumo 
		Given: esta disponible el insumo 
		and es menor o igual a la cantidad a restar
		When se resta el insumo 
		Then se muestra insumo extraido y cantidad total.
