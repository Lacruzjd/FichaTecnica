import { Almacen } from "./almacen.js";

export { FichaTecnica, Item };

class Item {
  constructor(cantidadBruta, ingrediente, unidad, cantidadNeta, precio) {
    this.cantidadBruta = cantidadBruta,
    this.ingrediente = ingrediente,
    this.unidad = unidad,
    this.cantidadNeta = cantidadNeta,
    this.marcaderiaComprar = this.cantidadBruta / this.cantidadNeta,
    this.precioUnidad = precio,
    this.costoTotal =
        this.cantidadNeta * this.marcaderiaComprar * this.precioUnidad;
  }
}

class FichaTecnica {
  constructor(nombre) {
    this.nombre = nombre, (this.items = []);
  }

  agregarIngrediente(ingrediente) {
    this.items.push(ingrediente);
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
