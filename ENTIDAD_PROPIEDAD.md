# Inventario entidades y propiedades

Entidad: Administrador
Usuario crado por el sistema con facultades globales.
  
    Propiedades:
    nombre de usuario: texto
    contrasena: texto
    nombre: texto 
    Apellido: texto
    documento: numeros
    email: texto 
    telefono: numeros
    facultades: array de Facultades globales
    fecha de creacion: Date  

Entidad: Facultades
Acciones definidas en el sistema para ser ejecutadas
por los usuarios creados por el administrador
  
    Propiedades:
    id: texto
    nombre: texto 
    operaciones: array de facultades en el sistema
    fecha de creacion: Date 

Entidad: Nivel
Son craedos por el administrador, da facultades de ciertas operaciones definidas en el sistema, 
       
    Propiedades:
    id: texto
    nombre: texto 
    operaciones: array de Facultades
    fecha de creacion: Date 

Entidad: Usuario
Son craedos por el administrador y asigna facultades de ciertas operaciones definidas en el sistema.
       
    Propiedades:
    contrasena: texto
    nombre de usuario: texto
    nombre: texto 
    apellido: texto
    documento: numeros
    email: texto 
    telefono: numeros
    nivel: array de Nivel
    fecha de creacion: Date 


Categoria:
Da una clasificacion general para agregar subcategorias,
es creada por el usuario facultado y logeado en el sistema.

    Entidad: Categoria.

    Propiedades: 
    id: texto
    nombre: texto
    fecha de creacion: Date
    coleccion de categorias: array de Categorias
    creador: Usuario
    fecha de creacion: Date 

Subcategoria:
Deficnion de subcategoria, asignado a categoria la cual debe existir,
es creado por un usario logeado en el sistema, contendra los insumos.

    Entidad: Subcategoria.

    Propiedades:
    id: texto
    categoria: Categoria
    nombre: texto
    insumos: array de insumos
    creador: usuario
    fecha de creacion: Date 

Ingrediente: 
Elemento que se agregara al inventario, da las pautas para 
definirlo, esta asociado a una categoria y subcategoria.

    Entidad: Ingrediente

    Propiedades:
    id: texto 
    categoria: Categoria
    subcategoria: Subcategoria
    nombre: texto 
    marca: texto 
    lote: texto 
    fecha de vencimiento: Date 
    encargado: usuario
    fecha de ingreso: Date

Utilitario: 
Elemento que se agregara al inventario, da las pautas para 
definirlo, esta asociado a una categoria.

    Entidad: Utilitario

    Propiedades:
    id: texto 
    categoria: Categoria
    nombre: texto 
    marca: texto 
    lote: texto 
    fecha de vencimiento: Date 
    encargado: usuario
    fecha de ingreso: Date



