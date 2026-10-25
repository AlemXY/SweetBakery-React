/** Recursos gráficos locales. Las ilustraciones son conceptuales, no fotografías reales de productos.
 * Los datos de precios, stock y contacto comercial aún no están configurados.
 */
export const image = (name: string): string => `/art/${name.replace(/\.[^.]+$/, "")}.svg`;
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
