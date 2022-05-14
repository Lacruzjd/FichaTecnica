import { FichaTecnica, Item } from "./src/FichaTecnica.js";

const ing1 = new Item(1.2, "Pechuga de pollo", "kg", 0.55, 1.1);
ing1.setMercaderiaComprar;
ing1.setMostoTotal;
const ing2 = new Item(1.5, "Pechuga de pavo", "kg", 0.55, 1.1);
ing2.setMercaderiaComprar;
ing2.setMostoTotal;
const ficha1 = new FichaTecnica("Suprema con almendras");

ficha1.addIngrediente(ing1);
ficha1.addIngrediente(ing2);
ficha1.addMercaderiaComprarItem();
ficha1.addCostoTotalItem();
ficha1.costoTotal();
console.log(ficha1);

