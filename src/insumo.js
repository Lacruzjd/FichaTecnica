export {Insumo};
class Insumo {
  constructor(nombre, peso, precioCompra, fechaCaducidad, cantidad) {
    
    this.nombre = nombre;
    this.peso = peso;
    this.precioCompra = precioCompra;
    this.fechaCaducidad = fechaCaducidad;
    this.cantidad = cantidad;
    this.precioPorUnidad = precioCompra / peso;
  }

}



