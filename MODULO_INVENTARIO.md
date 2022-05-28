# MODULO INVENTARIO:

## Entrada y salida de productos.

Definicion de Niveles de usuarios:
	Administrador: 	Agrega, actualiza y elimina usuarios.
					Crea elimina y actualiza categorias subcategorias e insumos.
					Agrega, resta y modifica elementos del inventario. 

	Encargado: 	Crea elimina y actualiza categorias subcategorias e insumos
				en el sistema
				Agrega, resta y modifica elementos del inventario.  

	Obrador:	Agrega y resta elementos del inventario.
 
	Ingredientes:

		Subcategorias: Aceites y Materias Grasas.
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
				utilitarios.
	
	
	Utilitarios: 

Definicion de Categorias de insumos:
 
	Ingredientes:

		Subcategorias: Aceites y Materias Grasas.
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
				utilitarios.
	
	
	Utilitarios: 


### Gherkin: 

Feature: Usuarios.

	Background:
		Given: Seccion iniciada por el administrador o encargado.
		facultades definidas en el sistema	
	
	Scenario: Crear nivel. 
		Given: Facultades definidas en el sistema
		When se define el nivel y facultades
		Then se muestra nivel creado

	Scenario: Crear usuario.
		Given: nivel de usuario definido
		When se define el usuario y asigna nivel
		Then se muestra datos del usuario y nivel 

	Scenario: Modificar usuario.
		Given: Usuario creado
		When se modifica el usuario
		Then se muestra datos del usuario modificado

	Scenario: Elminar usuario.
		Given: Usuario creado
		When se alimina el usuario
		Then se muestra datos del usuario eliminado


Feature: Definir de categoria.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

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
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Actualizar categoria. 
		Given: existe categoria
		When se actualzia el categoria 
		Them se muestra categoria actualizada.

Feature: Eliminar categoria.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Eliminar categoria 
		Given: existe categoria
		And no tiene insumos asociados
		When se elimina la categoria 
		Them se muestra categoria eliminada.

Feature: Definir subcategoria.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Definir nueva subcategoria.
		Given: Subcategoria nueva con nombre y caracteristicas validas.
		When se define la subcategoria		
		Then se muestra la subcategoria definida
		
Feature: Asociar subcategoria a categoria.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Asociar subcategoria a categoria.
		Given: subcategoria creada
		And categoria existente.
		When se seleciona la categoria
		and se agrega la subcategoria
		Then se muestra subcategoria asociada a categoria

Feature: Listar subcategorias.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Listar subcategorias.
		Given subcategorias existe
		When se solicita listar
		Then se muesta listado de subcategorias con categorias y demas caracteristicas.

Feature: Actualizar definicion subcategorias.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Actualizar subcategoria. 
		Given: existe subcategoria
		When se actualzia el subcategoria 
		Them se muestra subcategoria actualizada.

Feature: Eliminar subcategoria.

	Background:
		Given: Seccion iniciada por el administrador o encargado.

	Scenario: Eliminar subcategoria. 
		Given: existe subcategoria
		When se elimina el subcategoria 
		Them se muestra subcategoria eliminado.

Feature: Agregar ingrediente

	Background:
		Given: Seccion iniciada por el administrador, encargado o usuario.

	Scenario: Agregar nuevo ingrediente 
		Given: esta definido el ingrediente
		and creda la sucategoria
		When se crea y guarda el ingrediente
		Then se muesta ingrediente agregado.

Feature: Restar ingrediente

	Background:
		Given: Seccion iniciada por el administrador, encargado o usuario.

	Scenario: Restar cantidad del ingrediente 
		Given: esta disponible el ingrediente 
		and el total es menor o igual a la cantidad a restar
		When se resta la cantidad del ingrediente
		Then se resta la cantiad del total existente
		and se muestra cantidad del ingrediente extraido y el total actual.

Feature: Agregar utilitario

	Background:
		Given: Seccion iniciada por el administrador, encargado o usuario.

	Scenario: Agregar nuevo utilitario 
		Given: esta definido el utilitario
		and creda la sucategoria
		When se crea y guarda el utilitario
		Then se muesta utilitario agregado.

Feature: Restar utilitario

	Background:
		Given: Seccion iniciada por el administrador, encargado o usuario.

	Scenario: Restar cantidad del utilitario 
		Given: esta disponible el utilitario 
		and el total es menor o igual a la cantidad a restar
		When se resta la cantidad del utilitario
		Then se resta la cantiad del total existente
		and se muestra cantidad del utilitario extraido y el total actual.
