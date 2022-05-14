import { FichaTecnica, Item } from "./src/FichaTecnica.js";

const ficha = new FichaTecnica();
const item = new Item(2.200,"Pechuga Pollo", "kg", 0.55, 0);

ficha.addIngrediente(item);
ficha.addMercaderiaComprarItem();
ficha.addCostoTotalItem();

console.log(ficha);

