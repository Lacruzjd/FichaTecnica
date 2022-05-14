export {Almacen};

class Almacen {
    constructor( ){
       this.almacen = []
   }
agregarProducto(insumo){
    this.almacen.push(insumo);
}

mostrarProducto(){
    return this.almacen;
}
}