export type Product = {
  slug: string;
  name: string;
  sinhala: string;
  category: ProductCategory;
  description: string;
  ingredients: string[];
  sizes: string[];
  shownSize: string;
  availability: string;
  image: string;
};

export const productCategories = [
  "Chilli",
  "Curry powders",
  "Ground spices",
  "Whole spices",
  "Pantry & drinks",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export const products: Product[] = [
  {
    slug: "chilli-powder",
    name: "Chilli Powder",
    sinhala: "මිරිස් කුඩු",
    category: "Chilli",
    description:
      "Finely milled Sri Lankan chilli with a warm, even heat. The everyday powder for curries, sambols, marinades and fried dishes.",
    ingredients: ["Dried red chilli"],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/chilli-powder.png",
  },
  {
    slug: "chilli-pieces",
    name: "Chilli Pieces",
    sinhala: "කැලි මිරිස්",
    category: "Chilli",
    description:
      "Coarsely cut dried chilli with a deep red colour. Used for tempering, pickles and dishes that need visible spice and a slower heat.",
    ingredients: ["Dried red chilli pieces"],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/chilli-pieces.png",
  },
  {
    slug: "turmeric-powder",
    name: "Turmeric Powder",
    sinhala: "කහ කුඩු",
    category: "Ground spices",
    description:
      "Bright, earthy turmeric ground for colour and aroma. A staple in rice, vegetable curries and everyday Sri Lankan cooking.",
    ingredients: ["Dried turmeric"],
    sizes: ["25g","50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/turmeric-powder.png",
  },
  {
    slug: "curry-powder",
    name: "Curry Powder",
    sinhala: "තුනපහ කුඩු",
    category: "Curry powders",
    description:
      "A balanced everyday blend prepared for household curries. Fragrant, golden and ready to cook without extra roasting.",
    ingredients: [
      "Coriander",
      "Cinnamon Leaves",
      "Curry Leaves",
      "Garlic",
      "DryTurmeric"
    ],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/curry-powder.png",
  },
  {
    slug: "meat-curry-powder",
    name: "Meat Curry Powder",
    sinhala: "මස්කරි කුඩු",
    category: "Curry powders",
    description:
      "A fuller, roasted blend for chicken, beef and mutton. Deeper colour and a lasting aroma that stands up to rich gravies.",
    ingredients: [
      "Coriander",
      "Cumin",
      "Fennel",
      "Chilli",
      "Black pepper",
      "Cinnamon",
      "Cardamom",
      "Cloves",
    ],
    sizes: ["50g", "100g", "250g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/meat-curry-powder.png",
  },
  {
    slug: "roasted-curry-powder",
    name: "Roasted Curry Powder",
    sinhala: "බැදපු තුනපහ කුඩු",
    category: "Curry powders",
    description:
      "Spices roasted before milling for a darker, nuttier curry. Best for gravies that need a toasted, home-style flavour.",
    ingredients: [
      "Coriander",
      "Cinnamon Leaves",
      "Curry Leaves",
      "Garlic",
      "DryTurmeric"
    ],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/roasted-curry-powder.png",
  },
  {
    slug: "roasted-chilli-curry-powder",
    name: "Roasted Chilli & Curry Powder",
    sinhala: "තුනපහ මිශ්‍ර බැදපු මිරිස් කුඩු",
    category: "Curry powders",
    description:
      "Roasted chilli blended with curry spices for a hotter, deeper powder. Used in meat curries, fried dishes and strong gravies.",
    ingredients: [
      "Roasted chilli",
      "Coriander",
      "Cumin Seeds",
      "Fennel Seeds",
      "Cinnamon Leaves",
      "Curry Leaves",
      "Garlic",
      "Fenugreek"
    ],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/roasted-chilli-curry-powder.png",
  },
  {
    slug: "pepper-powder",
    name: "Pepper Powder",
    sinhala: "ගම්මිරිස් කුඩු",
    category: "Ground spices",
    description:
      "Freshly ground black pepper with a clean, sharp heat. For gravies, marinades, soups and table seasoning.",
    ingredients: ["Black pepper"],
    sizes: ["25g","50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/pepper-powder.png",
  },
  {
    slug: "black-powder",
    name: "Black Powder",
    sinhala: "කළු කුඩු",
    category: "Curry powders",
    description:
      "A dark roasted curry powder with a smoky, deep flavour. Used in traditional black curries and rich meat gravies.",
    ingredients: [
      "Roasted coriander",
      "Roasted cumin",
      "Roasted chilli",
      "Black pepper",
      "Fennel",
      "Cinnamon",
    ],
    sizes: ["50g", "100g", "250g", "500g", "1kg"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/black-powder.png",
  },
  {
    slug: "coriander",
    name: "Coriander",
    sinhala: "කොත්තමල්ලි",
    category: "Whole spices",
    description:
      "Whole coriander seed with a mild citrus aroma. The base of Sri Lankan curry powders, roasted mixes and herbal drinks.",
    ingredients: ["Whole coriander seed"],
    sizes: ["100g"],
    shownSize: "100g",
    availability: "In stock",
    image: "/products/coriander.png",
  },
  {
    slug: "cumin-seeds",
    name: "Cumin Seeds",
    sinhala: "සුදුරු",
    category: "Whole spices",
    description:
      "Warm, nutty cumin seed for tempering oil, curry powders and roasted spice mixes.",
    ingredients: ["Cumin seed"],
    sizes: ["50g", "100g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/cumin-seeds.png",
  },
  {
    slug: "fennel-seeds",
    name: "Fennel Seeds",
    sinhala: "මහදුරු",
    category: "Whole spices",
    description:
      "Sweet, cooling fennel seed used in curry blends, teas and after-meal seasoning.",
    ingredients: ["Fennel seed"],
    sizes: ["50g", "100g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/fennel-seeds.png",
  },
  {
    slug: "fenugreek",
    name: "Fenugreek",
    sinhala: "උළුහාල්",
    category: "Whole spices",
    description:
      "Bitter-sweet fenugreek seed for fish curries, dhal and traditional tempering. A little goes a long way.",
    ingredients: ["Fenugreek seed"],
    sizes: ["50g", "100g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/fenugreek.png",
  },
  {
    slug: "mustard",
    name: "Mustard",
    sinhala: "අබ",
    category: "Whole spices",
    description:
      "Mustard seed for tempering oils, pickles and vegetable dishes. Pops in hot oil and seasons the whole pan.",
    ingredients: ["Mustard seed"],
    sizes: ["50g", "100g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/mustard.png",
  },
  {
    slug: "goraka",
    name: "Goraka",
    sinhala: "ගොරකා",
    category: "Whole spices",
    description:
      "Dried goraka for sour fish curries and traditional gravies. A distinctive taste of Sri Lankan kitchens.",
    ingredients: ["Dried goraka"],
    sizes: ["50g", "100g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/goraka.png",
  },
  {
    slug: "sago",
    name: "Sago",
    sinhala: "සව්",
    category: "Pantry & drinks",
    description:
      "Small white sago pearls for puddings, payasam and festive sweets. Cooks clear and soft in milk or coconut milk.",
    ingredients: ["Sago pearls"],
    sizes: ["100g"],
    shownSize: "100g",
    availability: "In stock",
    image: "/products/sago.png",
  },
  {
    slug: "kurakkan-flour",
    name: "Kurakkan Flour",
    sinhala: "කුරක්කන් පිටි",
    category: "Pantry & drinks",
    description:
      "Finger-millet flour for roti, pittu, porridge and traditional sweets. Earthy, wholesome and milled for home kitchens.",
    ingredients: ["Kurakkan (finger millet)"],
    sizes: ["400g"],
    shownSize: "400g",
    availability: "In stock",
    image: "/products/kurakkan-flour.png",
  },
  {
    slug: "coffee",
    name: "Coffee",
    sinhala: "කෝපි",
    category: "Pantry & drinks",
    description:
      "Roasted and ground coffee packed for the household jar. A dark, familiar cup from the same Bogolla spice house.",
    ingredients: ["Roasted coffee"],
    sizes: ["20g", "50g"],
    shownSize: "50g",
    availability: "In stock",
    image: "/products/coffee.png",
  },
  {
    slug: "ginger-mix-coriander",
    name: "Ginger Mix Coriander Drink",
    sinhala: "ඉඟුරු මිශ්‍ර කොත්තමල්ලි පානය",
    category: "Pantry & drinks",
    description:
      "A natural ginger and coriander drink mix. Brewed as a warm cup for everyday sipping — 100% natural, as packed in Hettipola.",
    ingredients: ["Ginger", "Coriander", "Black pepper"],
    sizes: ["100g"],
    shownSize: "100g",
    availability: "In stock",
    image: "/products/ginger-mix-coriander.png",
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}

export const featuredSlugs = [
  "chilli-powder",
  "turmeric-powder",
  "meat-curry-powder",
  "kurakkan-flour",
] as const;
