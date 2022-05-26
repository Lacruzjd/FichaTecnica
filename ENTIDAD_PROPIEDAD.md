# Inventario entidades y propiedades

Usuario:
Interactua con el sistema una vez logeado,
crea, modifica y elimina categorias e insumos.

    Entidad: Usuario

    Propiedades:
    id: texto
    nombre: texto 
    apellido: texto
    
Categoria:
Da una clasificacion general para agregar subcategorias,
es creada por un usuario logeado en el sistema.

    Entidad: Categoria.

    Propiedades: 
    id: texto
    nombre: texto
    fecha de creacion: Date
    coleccion de categorias: array de Categorias
    creador: Usuario

Subcategoria:
Deficnion de subcategoria, asignado a categoria la cual debe existir,
es creado por un usario logeado en el sistema, contendra los insumos.

    Entidad: Subcategoria.

    Propiedades:
    categoria: Categoria
    id: texto
    nombre: texto
    insumos: array de insumos
    creador: usuario

Insumo: 
Elemento que se agregara al inventario, da las pautas para 
definirlo, esta asociado a una categoria y subcategoria.

    Entidad: Insumo

    Propiedades:
    categoria: Categoria
    subcategoria: Subcategoria
    id: texto 
    nombre: texto 
    marca: texto 
    lote: texto 
    fecha de vencimiento: Date 
    encargado: usuario



