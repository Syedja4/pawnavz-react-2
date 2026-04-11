export const PRODUCTS = [
  {
    id: 1,
    name: 'Royal Canin Adult Dog Food',
    price: 2499,
    compare: 2999,
    rating: 4.8,
    reviews: 1240,
    tag: 'Best Seller',
    emoji: '🍖',
    pet: 'Dog',
    category: 'Food',
  },
  {
    id: 2,
    name: 'Pedigree Dentastix Treats',
    price: 399,
    compare: 499,
    rating: 4.6,
    reviews: 856,
    tag: 'Popular',
    emoji: '🦷',
    pet: 'Dog',
    category: 'Treats',
  },
  {
    id: 3,
    name: 'Premium Adjustable Collar',
    price: 349,
    compare: null,
    rating: 4.5,
    reviews: 423,
    tag: 'New',
    emoji: '🏷️',
    pet: 'Dog',
    category: 'Accessories',
  },
  {
    id: 4,
    name: 'Whiskas Ocean Fish Cat Food',
    price: 599,
    compare: 699,
    rating: 4.7,
    reviews: 678,
    tag: 'Best Seller',
    emoji: '🐟',
    pet: 'Cat',
    category: 'Food',
  },
  {
    id: 5,
    name: 'Interactive Puzzle Toy',
    price: 799,
    compare: 999,
    rating: 4.4,
    reviews: 312,
    tag: 'Trending',
    emoji: '🧩',
    pet: 'Dog',
    category: 'Toys',
  },
  {
    id: 6,
    name: 'Stainless Steel Water Bowl',
    price: 449,
    compare: null,
    rating: 4.9,
    reviews: 892,
    tag: 'Top Rated',
    emoji: '🥣',
    pet: 'All',
    category: 'Accessories',
  },
  {
    id: 7,
    name: 'Cat Scratching Post Tower',
    price: 1899,
    compare: 2499,
    rating: 4.6,
    reviews: 543,
    tag: 'Sale',
    emoji: '🌲',
    pet: 'Cat',
    category: 'Furniture',
  },
  {
    id: 8,
    name: 'LED Safety Dog Harness',
    price: 1299,
    compare: 1599,
    rating: 4.7,
    reviews: 267,
    tag: 'New',
    emoji: '🔦',
    pet: 'Dog',
    category: 'Accessories',
  },
  {
    id: 9,
    name: 'Premium Cat Carrier Bag',
    price: 1599,
    compare: 2099,
    rating: 4.5,
    reviews: 189,
    tag: 'Popular',
    emoji: '👜',
    pet: 'Cat',
    category: 'Accessories',
  },
  {
    id: 10,
    name: 'Catnip Enrichment Kit',
    price: 249,
    compare: null,
    rating: 4.8,
    reviews: 724,
    tag: 'New',
    emoji: '🌿',
    pet: 'Cat',
    category: 'Toys',
  },
  {
    id: 11,
    name: 'Dog Grooming Kit Pro',
    price: 2199,
    compare: 2799,
    rating: 4.7,
    reviews: 445,
    tag: 'Best Seller',
    emoji: '✂️',
    pet: 'Dog',
    category: 'Grooming',
  },
  {
    id: 12,
    name: 'Automatic Pet Feeder',
    price: 3499,
    compare: 3999,
    rating: 4.6,
    reviews: 321,
    tag: 'Trending',
    emoji: '🤖',
    pet: 'All',
    category: 'Smart',
  },
]

const PRODUCT_DETAILS_BY_ID = {
  1: {
    desc: 'Complete nutrition for adult dogs with precise calorie content. Contains high-quality proteins, digestive enhancers, and a patented kibble shape.',
    specs: [['Weight', '3kg'], ['Life Stage', 'Adult'], ['Breed', 'All Breeds'], ['Flavour', 'Chicken & Rice'], ['Shelf Life', '18 months']],
  },
  2: {
    desc: 'Daily dental chews that help reduce tartar buildup by up to 80%.',
    specs: [['Count', '28 sticks'], ['Flavour', 'Original'], ['For Size', 'Medium Dogs'], ['Made In', 'India']],
  },
  3: {
    desc: 'Durable nylon collar with quick-release buckle and reflective stitching for night safety.',
    specs: [['Material', 'Nylon + Metal'], ['Sizes', 'XS to XL'], ['Waterproof', 'Yes'], ['Reflective', 'Yes'], ['Colors', '6 available']],
  },
  4: {
    desc: 'Premium wet cat food made with real ocean fish. Provides complete and balanced nutrition.',
    specs: [['Weight', '85g × 12'], ['Life Stage', 'Adult Cat'], ['Protein', '12%'], ['Moisture', '80%'], ['Pack', '12 pouches']],
  },
  5: {
    desc: "3-level difficulty puzzle toy that stimulates your dog's mind. Dishwasher safe.",
    specs: [['Material', 'BPA-Free Plastic'], ['Difficulty', '3 Levels'], ['Size', '30cm × 25cm'], ['Dishwasher Safe', 'Yes']],
  },
  6: {
    desc: 'Anti-slip stainless steel bowl with food-grade finish. Rust-proof and bacteria resistant.',
    specs: [['Material', 'Stainless Steel'], ['Capacity', '1.2 Litre'], ['Anti-Slip', 'Yes'], ['Dishwasher', 'Safe'], ['Sizes', 'S, M, L']],
  },
  7: {
    desc: 'Multi-level cat tower with sisal posts, hanging toys, and a cozy condo.',
    specs: [['Height', '120cm'], ['Base', '40cm × 40cm'], ['Material', 'Sisal + Plush'], ['Platforms', '4 Levels'], ['Max Weight', '8kg']],
  },
  8: {
    desc: 'USB rechargeable LED harness for night walks. 3 lighting modes, escape-proof.',
    specs: [['LED Modes', '3 (Solid/Flash/Pulse)'], ['Battery', 'USB-C Li-ion'], ['Battery Life', '8 hours'], ['Waterproof', 'IPX4'], ['Sizes', 'S, M, L, XL']],
  },
  9: {
    desc: 'Airline-approved soft carrier with mesh panels for ventilation.',
    specs: [['Approved', 'Airline Cabin'], ['Max Weight', '6kg'], ['Dimensions', '45×28×28cm'], ['Material', 'Oxford Cloth']],
  },
  10: {
    desc: 'Organic catnip with 4 enrichment toys. Reduces anxiety and promotes play.',
    specs: [['Catnip', 'Organic, 30g'], ['Toys', '4 included'], ['Safe For', 'Cats 6mo+'], ['Origin', 'USA Grown']],
  },
  11: {
    desc: 'Professional 7-piece grooming kit with slicker brush, nail clipper, ear cleaner and more.',
    specs: [['Pieces', '7 in 1 Kit'], ['Nail Clipper', 'Safety guard'], ['For Size', 'All Dogs'], ['Material', 'Stainless Steel'], ['Carry Case', 'Included']],
  },
  12: {
    desc: 'Programmable auto-feeder with app control and voice recorder for up to 6 meals/day.',
    specs: [['Meals/Day', 'Up to 6'], ['Capacity', '6 Litres'], ['App Control', 'Yes (WiFi)'], ['Voice Recorder', '10 seconds'], ['Power', 'Adapter + Battery']],
  },
}

export const PRODUCTS_BY_ID = Object.fromEntries(
  PRODUCTS.map((product) => [product.id, product])
)

export function getProductCardById(id) {
  return PRODUCTS_BY_ID[id] ?? null
}

export function getProductById(id) {
  const product = PRODUCTS_BY_ID[id]

  if (!product) return null

  return {
    ...product,
    ...PRODUCT_DETAILS_BY_ID[id],
  }
}
