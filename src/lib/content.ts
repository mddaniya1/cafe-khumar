import burger from "@/assets/dish-burger.jpg";
import boti from "@/assets/dish-boti.jpg";
import pizza from "@/assets/dish-pizza.jpg";
import chai from "@/assets/dish-chai.jpg";
import hero from "@/assets/hero-rooftop.jpg";
import story from "@/assets/story-rooftop.jpg";

export const dishes = [
  { slug: "juicy-burgers", name: "Juicy Burgers", img: burger, desc: "Stacked, smashed and dripping — our late-night favourite." },
  { slug: "khumaar-special-chicken-boti", name: "Khumaar Special Chicken Boti", img: boti, desc: "Charcoal-kissed boti in our house marinade." },
  { slug: "shahi-pizza", name: "Shahi Pizza", img: pizza, desc: "A royal, loaded pie with a crisp, blistered crust." },
  { slug: "special-karak-chai", name: "Special Karak Chai", img: chai, desc: "Slow-brewed, strong and made for long conversations." },
];

export type MenuItem = { name: string; desc: string };
export const menu: { category: string; items: MenuItem[] }[] = [
  {
    category: "Fast Food & Continental",
    items: [
      { name: "Juicy Burgers", desc: "Grilled patties, melted cheese, house sauce." },
      { name: "Club Sandwiches", desc: "Triple-layered, toasted and generously filled." },
      { name: "Sizzling Steaks", desc: "Served hot on the plate with signature sauce." },
      { name: "Crispy Broast", desc: "Golden, crunchy and juicy inside." },
      { name: "Grilled Chicken Pasta", desc: "Creamy pasta topped with grilled chicken." },
    ],
  },
  {
    category: "Desi & BBQ Special",
    items: [
      { name: "Tomato Gravy with Secret Spices", desc: "A rich, tangy gravy from our own spice blend." },
      { name: "Khumaar Special Chicken Boti", desc: "Smoky charcoal boti, marinated overnight." },
      { name: "Khumaar Angara Chicken", desc: "Fiery, smoky and full of desi character." },
    ],
  },
  {
    category: "Pizza & Asian",
    items: [
      { name: "Shahi Pizza", desc: "Loaded toppings on a crisp, airy base." },
      { name: "Chicken Chow Mein", desc: "Wok-tossed noodles with vegetables." },
      { name: "Chicken Manchurian", desc: "Sweet, spicy and saucy — a classic." },
    ],
  },
  {
    category: "Drinks & Chai",
    items: [
      { name: "Pina Colada", desc: "Creamy coconut and pineapple, chilled." },
      { name: "Mocktails", desc: "Fresh, colourful and refreshing." },
      { name: "Cold Drinks", desc: "Your favourite chilled sodas." },
      { name: "Special Karak Chai Selection", desc: "Strong, aromatic chai for rooftop nights." },
    ],
  },
];

export const posts = [
  { slug: "late-night-rooftop-evening-nazimabad", title: "A Late-Night Rooftop Evening in Nazimabad", date: "Sep 12, 2026", tag: "Rooftop", img: hero },
  { slug: "dishes-guests-come-back-for", title: "Dishes Guests Always Come Back For", date: "Aug 28, 2026", tag: "Menu", img: boti },
  { slug: "karak-chai-under-the-stars", title: "Karak Chai Under the Stars", date: "Aug 03, 2026", tag: "Chai", img: chai },
];

export const testimonials = [
  { quote: "Placeholder review — a real guest review will appear here once provided by Cafe Khumaar.", short: "Placeholder review — to be replaced.", name: "Guest Name (placeholder)", role: "Sample testimonial" },
  { quote: "Placeholder review — this slot is reserved for a genuine guest's words about the rooftop and food.", short: "Placeholder review — to be replaced.", name: "Guest Name (placeholder)", role: "Sample testimonial" },
  { quote: "Placeholder review — not a real review. Replace with verified feedback before launch.", short: "Placeholder review — to be replaced.", name: "Guest Name (placeholder)", role: "Sample testimonial" },
];

export { hero, story };
