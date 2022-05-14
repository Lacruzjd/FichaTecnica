import { FichaTecnica, Item } from "./src/FichaTecnica.js";

// const almacen = new Almacen();
// const insumo = new Insumo("Pimienta negra",0.060, 3.60, 10/10/2022,10);
// const insumo2 = new Insumo("Tabasco",0.50, 0.06, 10/10/2022,5); 

// almacen.agregarProducto(insumo);
// almacen.agregarProducto(insumo2);
// console.log(almacen);

// const fihca1 = new FichaTecnica("Suprema de pollo con almendras", 1.200, "kg", 0.550);
// console.log(fihca1);
const ing1 = new Item(1.200, "Pechuga de pollo","kg",0.550,1.10 );
const ing2 = new Item(1.200, "Pechuga de pavo","kg",0.550,1.10 );
const ficha1 = new FichaTecnica("Suprema con almendras");

ficha1.agregarIngrediente(ing1);
ficha1.agregarIngrediente(ing2);
console.log(ficha1.items);
console.log(ficha1.costoTotal())
console.log (ficha1.gramosProducidos());
console.log(ficha1.cantidadPorciones(2));
console.log(ficha1.costoPorPorcion(2))
console.log(ficha1.costoPorPorKilo());








