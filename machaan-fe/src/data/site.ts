export const site = {
  name: "Machaan",
  tagline: "Cafe and Connections",
  description:
    "A rooftop escape where warm conversations, crafted food, and premium shisha meet under open skies.",
  facebook: "https://www.facebook.com/machaancafeandconnection",
  phone: "+977 1-5423690",
  email: "hello@machaancafe.com",
  address: "Jhamsikhel, Lalitpur, Nepal",
  addressDetail: "Opposite British School · Lalitpur",
  hours: "Daily · 11:00 AM – 10:00 PM",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.1539281699946!2d85.30909407630739!3d27.68167812686866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19cd91f09cf9%3A0x6bd41c888d3e232c!2sJhamsikhel%2C%20Lalitpur!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp",
} as const;

export type MenuCategoryId =
  | "signatures"
  | "mains"
  | "beverages"
  | "shisha";

export const menuCategories: {
  id: MenuCategoryId;
  label: string;
}[] = [
  { id: "signatures", label: "Specialty Chiya & Tea" },
  { id: "mains", label: "Gourmet Coffees" },
  { id: "beverages", label: "Bakery & Desserts" },
  { id: "shisha", label: "Light Bites & Lounge" },
];

export const menuItems: Record<
  MenuCategoryId,
  {
    name: string;
    description: string;
    price: string;
    image: string;
    badge?: string;
  }[]
> = {
  signatures: [
    {
      name: "Special Masala Chiya",
      description:
        "House-blend black tea leaves boiled with fresh milk, crushed cardamom, ginger, and cloves. Served steaming in a clay pot.",
      price: "Rs. 150",
      image:
        "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=800&q=80",
      badge: "Local favorite",
    },
    {
      name: "Premium Matcha Latte",
      description:
        "Stone-ground organic Japanese green tea whisked with silky steamed milk and a light touch of organic honey.",
      price: "Rs. 280",
      image:
        "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?w=800&q=80",
      badge: "Cozy pick",
    },
    {
      name: "Kashmiri Kahwa",
      description:
        "Fragrant green tea leaves brewed with real Kashmiri saffron strands, cinnamon sticks, cardamom, and slivered almonds.",
      price: "Rs. 220",
      image:
        "https://images.unsplash.com/photo-1597481499750-3e6b22637e12?w=800&q=80",
    },
  ],
  mains: [
    {
      name: "Himalayan V60 Pour Over",
      description:
        "Slow-dripped single origin organic coffee beans sourced directly from the foothills of Nepal. Clean, floral, and bright.",
      price: "Rs. 240",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      badge: "Artisanal",
    },
    {
      name: "Caramel Macchiato",
      description:
        "Rich espresso shots combined with sweet vanilla syrup, freshly steamed milk, and a decadent warm caramel drizzle.",
      price: "Rs. 290",
      image:
        "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=800&q=80",
    },
    {
      name: "Machaan Cold Brew",
      description:
        "Slow-steeped for 18 hours in mountain spring water. Exceptionally smooth, cocoa notes, served over double-filtered clear ice.",
      price: "Rs. 260",
      image:
        "https://images.unsplash.com/photo-1517701609419-fb35f2cc43ea?w=800&q=80",
      badge: "Must try",
    },
  ],
  beverages: [
    {
      name: "Butter Croissant",
      description:
        "Freshly baked, multi-layered French pastry with a golden crispy crust and light, airy, buttery crumb.",
      price: "Rs. 180",
      image:
        "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80",
      badge: "Baked daily",
    },
    {
      name: "Blueberry NY Cheesecake",
      description:
        "Dense, creamy New York style baked cheesecake topped with a sweet and tart house-made wild blueberry compote.",
      price: "Rs. 350",
      image:
        "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=800&q=80",
      badge: "Signature",
    },
    {
      name: "Warm Almond Pastry",
      description:
        "Flaky puff pastry filled with sweet almond frangipane cream, topped with toasted sliced almonds.",
      price: "Rs. 220",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80",
    },
  ],
  shisha: [
    {
      name: "Grilled Chicken Club",
      description:
        "Triple-decker toasted sandwich filled with grilled chicken, smoked cheese, fried egg, lettuce, and herb aioli.",
      price: "Rs. 380",
      image:
        "https://images.unsplash.com/photo-1567234669013-2167cabae4a2?w=800&q=80",
    },
    {
      name: "Steamed Chicken Momos",
      description:
        "Hand-folded spiced chicken dumplings served with a warm tomato-sesame dipping sauce.",
      price: "Rs. 290",
      image:
        "https://images.unsplash.com/photo-1496116218417-1a781b1df0a7?w=800&q=80",
      badge: "Bestseller",
    },
    {
      name: "Double Apple Premium Shisha",
      description:
        "Our highly popular, aromatic blend — smooth draw with crisp anise and sweet double apple molasses, served with ice-water base.",
      price: "Rs. 850",
      image:
        "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=800&q=80",
    },
  ],
};

export const features = [
  {
    title: "Artisan Chiya & Coffee",
    description:
      "From authentic spiced masala chiya to hand-poured single-origin Himalayan coffees, brewed fresh daily.",
    icon: "deck",
  },
  {
    title: "Fresh Daily Bakery",
    description:
      "Golden buttery croissants, specialty warm cakes, and artisanal pastries baked fresh every morning.",
    icon: "food",
  },
  {
    title: "Connections Lounge",
    description:
      "A gorgeous rooftop deck, premium shisha lounge, and cozy seating built for warm conversations.",
    icon: "lounge",
  },
] as const;

export const testimonials = [
  {
    quote:
      "The absolute best rooftop cafe in Lalitpur. Their Special Masala Chiya and blueberry cheesecake are heavenly!",
    name: "Aarav Sharma",
    role: "Regular Guest",
  },
  {
    quote:
      "Cozy seating, friendly staff, and high-quality shisha flavors. Perfect spot to work or hang out with friends.",
    name: "Prerna Joshi",
    role: "Cafe Patron",
  },
  {
    quote:
      "The hand-poured coffee here is fantastic, and the croissants are so fresh. A true hidden gem above the city.",
    name: "Rohan Shrestha",
    role: "Coffee Enthusiast",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80",
    alt: "Cafe interior with warm lighting",
  },
  {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80",
    alt: "Artisan coffee being poured",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Plated restaurant dish",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    alt: "Restaurant dining atmosphere",
  },
] as const;
