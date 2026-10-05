// Edit business details and links here — everything on the site reads from this file.
export const site = {
  name: "Cafe Khumaar",
  tagline: "Stay High on Flavor",
  address: "Plot No. 3-C, 1/4, 6th Floor, Nazimabad Road, Block 3, Nazimabad, Karachi, Pakistan",
  shortAddress: "6th Floor, Nazimabad Block 3, Karachi",
  landmark: "6th Floor of VOCO Ballroom building, opposite Imtiaz Super Market",
  phone: "+923240231006",
  phoneDisplay: "+92 324 0231006",
  whatsapp: "923240231006",
  email: "cafekhumaar@gmail.com",
  hours: [
    { days: "Monday – Thursday", time: "6:00 PM – 2:30 AM" },
    { days: "Friday – Sunday", time: "6:00 PM – 3:00 AM" },
  ],
  mapsUrl: "https://goo.gl",
  instagramUrl: "https://instagram.com",
  facebookUrl: "https://facebook.com",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
