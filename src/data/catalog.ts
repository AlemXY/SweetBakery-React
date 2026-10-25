/** Catálogo reconstruido a partir del sitio original AlemXY/SweetBakery.
 * Ni los precios, ni la ubicación, ni el stock estaban verificados en el origen.
 * Las imágenes se sirven provisionalmente desde el despliegue antiguo de Vercel.
 */
const base =
  "https://sweet-bakery-xi.vercel.app/images/";
export const image = (name: string) => base + encodeURIComponent(name);
export type Dessert = {
  id: string;
  name: string;
  category: "Tartas" | "Chocolate";
  description: string;
  image: string;
  detail: string;
};
export const desserts: Dessert[] = [
  {
    id: "cheesecake",
    name: "Cheesecake de fresa",
    category: "Tartas",
    description: "Textura suave, base crujiente y un toque fresco de fresa.",
    image: image("cheesecake.jpg"),
    detail: "Un clásico delicado para compartir.",
  },
  {
    id: "brownie",
    name: "Brownie de chocolate",
    category: "Chocolate",
    description: "Chocolate intenso y una textura húmeda y reconfortante.",
    image: image("brownie.jpg"),
    detail: "Perfecto para amantes del cacao.",
  },
  {
    id: "tarta",
    name: "Tarta de manzana",
    category: "Tartas",
    description: "Masa dorada, manzana y un perfume suave de canela.",
    image: image("tarta_manzana.jpg"),
    detail: "Sabores tradicionales en cada porción.",
  },
];
