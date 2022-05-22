MODULO ALMACEN:
Entrada y salida de productos.

1.- Definir productos:
 
	Hay Ingredientes.
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
	
	Hay utilitarios: "no aplica por ahora".


1.1.- Gherkin: 

Feature: Creacion de categoria y asociacion de ingrediente.

	Scenario: Crear nueva categoria.
		Given: categoria nueva con nombre valido
		When se crea la categoria		
		Then se muestra la categoria fue creada 

	Scenario: Listar Categorias.
		Given Categorias creadas
		When se solicita listar
		Then se muesta listado de categorias

	Scenario: Asociar y agregar deficicnion del ingrediente a categoria.
		Given: categoria existe
		When Seleciona la categoria
		and agrega y define el ingrediente
		Then crea definicion del ingrediente

