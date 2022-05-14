class Item {
  constructor(cantidadBruta, ingrediente, unidad, cantidadNeta, precio) {
    this.cantidadBruta = cantidadBruta,
    this.ingrediente = ingrediente,
    this.unidad = unidad,
    this.cantidadNeta = cantidadNeta,
    this.precioUnidad = precio
  }
}

class FichaTecnica {
  constructor(nombre) {
    this.nombre = nombre, 
    this.items = [];
  }
  
  addIngrediente(ingrediente) {
    this.items.push(ingrediente);
  }

  addMercaderiaComprarItem(){
    for (let index = 0; index < this.items.length; index++) {
    let compras = this.items[index].cantidadBruta / this.items[index].cantidadNeta;
    this.items.push(compras);
    }
  }

  addCostoTotalItem(){
    for (let index = 0; index < this.items.length; index++) {
    let total = this.items[index].mercaderiaComprar * this.items[index].precioUnidad;
    this.items.push(total);
    }
  }
  
  costoTotal() {
    let total = 0;
    for (let index = 0; index < this.items.length; index++) {
      total += this.items[index].costoTotal;
    }
    return total;
  }

  gramosProducidos() {
    let gramos = 0;
    for (let index = 0; index < this.items.length; index++) {
      gramos += this.items[index].cantidadBruta;
    }
    return gramos;
  }

  cantidadPorciones(cantidad) {
    this.gramosProducidos();
    return this.gramosProducidos() / cantidad;
  }
  
  costoPorPorcion(cantidad) {
    return this.costoTotal() / cantidad;
  }

  costoPorPorKilo() {
    return this.costoTotal() * this.gramosProducidos();
  }
}

export { FichaTecnica, Item };