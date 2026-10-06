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

export type MenuItem = { name: string; desc: string; price: string };
export type MenuBlock = { emoji: string; category: string; items: MenuItem[] };

export const menu: MenuBlock[] = [
  {
    emoji: "🍔",
    category: "Fast Food & Starters",
    items: [
      { name: "Cheesy Fries · Dynamite Chicken · Wings", desc: "Loaded fries, fiery chicken bites and crispy wings.", price: "PKR 450 – 750" },
      { name: "Juicy Burgers", desc: "Beef & chicken options — grilled patties, melted cheese, house sauce.", price: "PKR 550 – 900" },
      { name: "Club & Crispy Sandwiches", desc: "Triple-layered club or a golden crispy sandwich, toasted and filled.", price: "PKR 500 – 850" },
    ],
  },
  {
    emoji: "🍝",
    category: "Mains & Chinese",
    items: [
      { name: "Alfredo & Creamy Pasta", desc: "Chicken pasta in a rich alfredo or creamy sauce.", price: "PKR 850 – 1,200" },
      { name: "Chowmein & Noodles", desc: "Wok-tossed with vegetables, fresh off the flame.", price: "PKR 750 – 1,100" },
      { name: "Chicken Chilli Dry & Manchurian", desc: "Served with fried rice — sweet, spicy and saucy.", price: "PKR 850 – 1,300" },
      { name: "Sizzling Steaks", desc: "Served hot on the plate with our signature sauce.", price: "PKR 1,100 – 1,600" },
    ],
  },
  {
    emoji: "🍢",
    category: "BBQ & Desi Setup",
    items: [
      { name: "Chicken Tikka Boti", desc: "Charcoal-grilled boti in our overnight house marinade.", price: "PKR 400 – 650" },
      { name: "Malai Boti with Paratha", desc: "Creamy, mild boti served with warm paratha.", price: "PKR 600 – 950" },
    ],
  },
  {
    emoji: "🍕",
    category: "Pizzas & Beverages",
    items: [
      { name: "Artisan Pizzas", desc: "Pepperoni, Americano and more on a crisp, airy base.", price: "PKR 900 – 1,600" },
      { name: "Mocktails", desc: "Zesty Sip, Passion Fruit, Peach Joy — fresh and chilled.", price: "PKR 350 – 550" },
      { name: "Chai & Coffee Selection", desc: "Slow-brewed karak chai and coffee classics.", price: "PKR 180 – 450" },
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
