/**
 * Static product catalogue for the Pawnavz pet-food store (India market).
 *
 * Frontend-only mock data. Every product carries the fields requested for the
 * catalogue (`brand`, `category`, `image`, `petType`, `lifeStage`, `foodType`)
 * AND the fields the existing UI already renders (`pet`, `emoji`, `tag`,
 * `compare`, `reviews`, `desc`, `specs`) so no component has to change.
 *
 * Prices are in INR (₹). `pet` mirrors `petType` to stay compatible with the
 * existing ProductCard / ShopPage markup.
 *
 * @typedef {'Dog' | 'Cat'} PetType
 * @typedef {'Dry' | 'Wet' | 'Gravy' | 'Treat' | 'Supplement'} FoodType
 * @typedef {'Puppy' | 'Adult' | 'Senior' | 'Kitten'} LifeStage
 *
 * @typedef {Object} Product
 * @property {number}              id        Stable identifier (used in routes).
 * @property {string}              name      Display name.
 * @property {string}              brand     Brand display name.
 * @property {string}              category  "Shop By Category" name.
 * @property {number}              price     Selling price in INR.
 * @property {number|null}         compare   Strike-through price, or null.
 * @property {number}              rating    Average rating (0–5).
 * @property {number}              reviews   Review count.
 * @property {string}              image     Image path (placeholder for now).
 * @property {string}              emoji     Emoji shown in the current emoji UI.
 * @property {string}              tag       Marketing badge.
 * @property {PetType}             petType   Dog or Cat.
 * @property {PetType}             pet       Mirror of petType (existing UI key).
 * @property {LifeStage}           lifeStage Life stage targeted.
 * @property {FoodType}            foodType  Food type.
 * @property {string}              desc      Long description (product page).
 * @property {Array<[string,string]>} specs  Spec key/value rows (product page).
 */

/** @type {Product[]} */
export const MOCK_PRODUCTS = [
  // ───────────────────────── Dog ─────────────────────────
  {
    id: 1, name: 'Royal Canin Maxi Adult Dry Dog Food', brand: 'Royal Canin', category: 'Adult Dog Food',
    price: 2499, compare: 2999, rating: 4.8, reviews: 1240, image: '/images/products/1.jpg', emoji: '🍖',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Complete nutrition tailored for large-breed adult dogs (26–44 kg), supporting bone health and digestive balance with a precise calorie content.',
    specs: [['Weight', '4 kg'], ['Life Stage', 'Adult'], ['Breed Size', 'Maxi (Large)'], ['Flavour', 'Chicken'], ['Shelf Life', '18 months']],
  },
  {
    id: 2, name: 'Royal Canin Mini Puppy Dry Food', brand: 'Royal Canin', category: 'Puppy Food',
    price: 1899, compare: 2199, rating: 4.9, reviews: 980, image: '/images/products/2.jpg', emoji: '🐶',
    tag: 'Top Rated', petType: 'Dog', pet: 'Dog', lifeStage: 'Puppy', foodType: 'Dry',
    desc: 'Highly digestible kibble for small-breed puppies up to 10 months, with antioxidants and prebiotics to support natural defences.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Puppy'], ['Breed Size', 'Mini (Small)'], ['Flavour', 'Chicken'], ['Made For', 'Up to 10 months']],
  },
  {
    id: 3, name: 'Farmina N&D Chicken & Pomegranate Adult', brand: 'Farmina', category: 'Adult Dog Food',
    price: 3299, compare: 3799, rating: 4.7, reviews: 612, image: '/images/products/3.jpg', emoji: '🍗',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Grain-free, ancestral-recipe nutrition with 70% animal ingredients, boneless chicken and antioxidant-rich pomegranate.',
    specs: [['Weight', '2.5 kg'], ['Life Stage', 'Adult'], ['Grain', 'Grain-Free'], ['Protein', '30%'], ['Flavour', 'Chicken & Pomegranate']],
  },
  {
    id: 4, name: 'Drools Chicken & Egg Adult Dog Food', brand: 'Drools', category: 'Dog Dry Food',
    price: 1299, compare: 1599, rating: 4.6, reviews: 2140, image: '/images/products/4.jpg', emoji: '🦴',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Real chicken and egg recipe with balanced omega-3 and omega-6 for a healthy coat, skin and strong immunity.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Protein', '24%'], ['Flavour', 'Chicken & Egg'], ['Made In', 'India']],
  },
  {
    id: 5, name: 'Drools Puppy Chicken & Egg Dry Food', brand: 'Drools', category: 'Puppy Food',
    price: 1149, compare: 1399, rating: 4.5, reviews: 1320, image: '/images/products/5.jpg', emoji: '🐶',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Puppy', foodType: 'Dry',
    desc: 'Starter nutrition for puppies with DHA for brain development and calcium for growing bones and teeth.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Puppy'], ['DHA', 'Added'], ['Flavour', 'Chicken & Egg'], ['Made In', 'India']],
  },
  {
    id: 6, name: 'Pedigree Adult Chicken & Vegetables', brand: 'Pedigree', category: 'Adult Dog Food',
    price: 999, compare: 1199, rating: 4.4, reviews: 3050, image: '/images/products/6.jpg', emoji: '🍖',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Everyday complete nutrition with 4 essential nutrient groups for whole-body health and energy.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Flavour', 'Chicken & Vegetables'], ['Nutrients', '4 Groups'], ['Made In', 'India']],
  },
  {
    id: 7, name: 'Pedigree Gravy Chicken Chunks Pouch', brand: 'Pedigree', category: 'Dog Gravy',
    price: 399, compare: 499, rating: 4.5, reviews: 870, image: '/images/products/7.jpg', emoji: '🍲',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Gravy',
    desc: 'Tender chicken chunks in rich gravy — a tasty topper or complete wet meal that boosts hydration.',
    specs: [['Weight', '70 g × 15'], ['Life Stage', 'Adult'], ['Form', 'Chunks in Gravy'], ['Pack', '15 pouches'], ['Moisture', '82%']],
  },
  {
    id: 8, name: 'Pedigree Dentastix Dental Treats', brand: 'Pedigree', category: 'Dog Treats',
    price: 399, compare: 499, rating: 4.6, reviews: 1560, image: '/images/products/8.jpg', emoji: '🦷',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Treat',
    desc: 'Daily dental chews with an X-shape that helps reduce tartar build-up by up to 80%.',
    specs: [['Count', '28 sticks'], ['For Size', 'Medium Dogs'], ['Use', 'Once daily'], ['Benefit', 'Reduces tartar'], ['Made In', 'India']],
  },
  {
    id: 9, name: 'Purepet Chicken & Vegetable Adult', brand: 'Purepet', category: 'Dog Dry Food',
    price: 799, compare: 999, rating: 4.3, reviews: 940, image: '/images/products/9.jpg', emoji: '🦴',
    tag: 'Sale', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Value-priced wholesome nutrition with real chicken, vegetables and essential vitamins for everyday health.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Flavour', 'Chicken & Vegetable'], ['Protein', '22%'], ['Made In', 'India']],
  },
  {
    id: 10, name: 'SmartHeart Adult Chicken & Egg', brand: 'SmartHeart', category: 'Adult Dog Food',
    price: 899, compare: 1099, rating: 4.4, reviews: 720, image: '/images/products/10.jpg', emoji: '🍗',
    tag: 'Trending', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Balanced formula with omega-3 & 6 for brain and heart health, plus a glossy coat.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Omega 3 & 6', 'Added'], ['Flavour', 'Chicken & Egg'], ['Protein', '23%']],
  },
  {
    id: 11, name: 'Kennel Kitchen Chicken & Brown Rice', brand: 'Kennel Kitchen', category: 'Dog Dry Food',
    price: 1099, compare: 1299, rating: 4.5, reviews: 410, image: '/images/products/11.jpg', emoji: '🍳',
    tag: 'New', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Real-food kitchen recipe with deboned chicken and wholesome brown rice, no by-product meal.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Grain', 'Brown Rice'], ['Flavour', 'Chicken'], ['Made In', 'India']],
  },
  {
    id: 12, name: 'Acana Wild Prairie Adult Dog', brand: 'Acana', category: 'Adult Dog Food',
    price: 4999, compare: 5499, rating: 4.8, reviews: 320, image: '/images/products/12.jpg', emoji: '🌾',
    tag: 'Top Rated', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Biologically appropriate recipe rich in free-run poultry, eggs and wild-caught fish, regionally sourced.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Adult'], ['Animal Content', '70%'], ['Grain', 'Grain-Free'], ['Origin', 'Imported']],
  },
  {
    id: 13, name: 'Orijen Original Adult Dog', brand: 'Orijen', category: 'Adult Dog Food',
    price: 5499, compare: 5999, rating: 4.9, reviews: 280, image: '/images/products/13.jpg', emoji: '🥩',
    tag: 'Premium', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Whole-prey, protein-rich nutrition with 85% quality animal ingredients to mirror the ancestral diet.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Adult'], ['Animal Content', '85%'], ['Grain', 'Grain-Free'], ['Origin', 'Imported']],
  },
  {
    id: 14, name: 'Taste of the Wild High Prairie Bison', brand: 'Taste of the Wild', category: 'Adult Dog Food',
    price: 4299, compare: 4799, rating: 4.7, reviews: 360, image: '/images/products/14.jpg', emoji: '🦬',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Grain-free recipe with roasted bison and venison, supported by species-specific probiotics.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Adult'], ['Protein', 'Bison & Venison'], ['Grain', 'Grain-Free'], ['Probiotics', 'Added']],
  },
  {
    id: 15, name: 'JerHigh Chicken Stick Treats', brand: 'JerHigh', category: 'Dog Treats',
    price: 299, compare: 399, rating: 4.5, reviews: 1180, image: '/images/products/15.jpg', emoji: '🍪',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Treat',
    desc: 'Soft, chewy real-chicken sticks — perfect bite-sized rewards for training and bonding.',
    specs: [['Weight', '70 g'], ['Form', 'Soft Sticks'], ['Flavour', 'Chicken'], ['Use', 'Training reward'], ['Added Sugar', 'No']],
  },
  {
    id: 16, name: 'Chip Chops Chicken & Liver Chips', brand: 'Chip Chops', category: 'Dog Treats',
    price: 349, compare: 449, rating: 4.6, reviews: 760, image: '/images/products/16.jpg', emoji: '🍗',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Treat',
    desc: 'Oven-dried real-meat chips made from chicken and liver — a high-protein, low-fat reward.',
    specs: [['Weight', '70 g'], ['Form', 'Chips'], ['Flavour', 'Chicken & Liver'], ['Protein', 'High'], ['Fat', 'Low']],
  },
  {
    id: 17, name: 'Dogsee Chew Puffies Banana', brand: 'Dogsee', category: 'Dog Treats',
    price: 249, compare: 299, rating: 4.7, reviews: 540, image: '/images/products/17.jpg', emoji: '🍌',
    tag: 'New', petType: 'Dog', pet: 'Dog', lifeStage: 'Puppy', foodType: 'Treat',
    desc: 'Light, puffed Himalayan cheese treats with banana — grain-free and ideal for puppies and small dogs.',
    specs: [['Weight', '70 g'], ['Form', 'Puffed treat'], ['Flavour', 'Banana & Cheese'], ['Grain', 'Grain-Free'], ['Origin', 'Himalayan']],
  },
  {
    id: 18, name: 'Himalaya Healthy Pet Digestive Supplement', brand: 'Himalaya Healthy Pet', category: 'Dog Supplements',
    price: 499, compare: 599, rating: 4.4, reviews: 430, image: '/images/products/18.jpg', emoji: '🌱',
    tag: 'Vet Choice', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Supplement',
    desc: 'Ayurveda-inspired digestive aid that supports gut health, appetite and nutrient absorption.',
    specs: [['Form', 'Syrup'], ['Volume', '200 ml'], ['Benefit', 'Digestion'], ['Dosage', 'As advised'], ['Made In', 'India']],
  },
  {
    id: 19, name: 'Fidele Senior Dog Lamb Recipe', brand: 'Fidele', category: 'Senior Dog Food',
    price: 2799, compare: 3199, rating: 4.6, reviews: 290, image: '/images/products/19.jpg', emoji: '🐑',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Senior', foodType: 'Dry',
    desc: 'Holistic senior recipe with lamb, glucosamine and chondroitin to support ageing joints and mobility.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Senior'], ['Joint Care', 'Glucosamine'], ['Flavour', 'Lamb'], ['Protein', '25%']],
  },
  {
    id: 20, name: 'Purina Pro Plan Adult Chicken', brand: 'Purina Pro Plan', category: 'Adult Dog Food',
    price: 2999, compare: 3499, rating: 4.7, reviews: 510, image: '/images/products/20.jpg', emoji: '🔬',
    tag: 'Top Rated', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Advanced nutrition with real chicken as the #1 ingredient and live probiotics for digestive and immune health.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Adult'], ['Probiotics', 'Live'], ['Flavour', 'Chicken'], ['Protein', '26%']],
  },
  {
    id: 21, name: 'Royal Canin Maxi Ageing 8+ Senior', brand: 'Royal Canin', category: 'Senior Dog Food',
    price: 2899, compare: 3299, rating: 4.7, reviews: 340, image: '/images/products/21.jpg', emoji: '🦴',
    tag: 'New', petType: 'Dog', pet: 'Dog', lifeStage: 'Senior', foodType: 'Dry',
    desc: 'Tailored for large-breed dogs over 8 years, supporting vitality, bone health and easy chewing.',
    specs: [['Weight', '3 kg'], ['Life Stage', 'Senior 8+'], ['Breed Size', 'Maxi (Large)'], ['Flavour', 'Chicken'], ['Antioxidants', 'Added']],
  },
  {
    id: 22, name: 'Drools Absolute Calcium Supplement', brand: 'Drools', category: 'Dog Supplements',
    price: 449, compare: 549, rating: 4.5, reviews: 980, image: '/images/products/22.jpg', emoji: '💊',
    tag: 'Best Seller', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Supplement',
    desc: 'Calcium tablets with phosphorus and vitamin D3 for strong bones, teeth and healthy growth.',
    specs: [['Form', 'Tablets'], ['Count', '50 tabs'], ['Key Nutrient', 'Calcium + D3'], ['Benefit', 'Bones & teeth'], ['Made In', 'India']],
  },
  {
    id: 23, name: 'Farmina Wet Dog Chicken in Gravy', brand: 'Farmina', category: 'Dog Wet Food',
    price: 459, compare: 559, rating: 4.5, reviews: 270, image: '/images/products/23.jpg', emoji: '🥫',
    tag: 'New', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Wet',
    desc: 'Tender chicken in savoury gravy — a complete, grain-free wet meal that supports hydration.',
    specs: [['Weight', '150 g × 6'], ['Life Stage', 'Adult'], ['Grain', 'Grain-Free'], ['Form', 'Wet'], ['Pack', '6 cans']],
  },
  {
    id: 24, name: 'Drools Wet Dog Food Chicken & Liver', brand: 'Drools', category: 'Dog Wet Food',
    price: 499, compare: 599, rating: 4.4, reviews: 620, image: '/images/products/24.jpg', emoji: '🥫',
    tag: 'Popular', petType: 'Dog', pet: 'Dog', lifeStage: 'Adult', foodType: 'Wet',
    desc: 'Real chunks of chicken and liver in a soft, palatable gravy — great as a meal or food topper.',
    specs: [['Weight', '150 g × 6'], ['Life Stage', 'Adult'], ['Form', 'Chunks in Gravy'], ['Flavour', 'Chicken & Liver'], ['Pack', '6 cans']],
  },

  // ───────────────────────── Cat ─────────────────────────
  {
    id: 25, name: 'Royal Canin Persian Adult Cat', brand: 'Royal Canin', category: 'Adult Cat Food',
    price: 2699, compare: 3199, rating: 4.8, reviews: 740, image: '/images/products/25.jpg', emoji: '🐱',
    tag: 'Best Seller', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Breed-specific nutrition for adult Persian cats with an almond-shaped kibble and skin-coat support.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Adult'], ['Breed', 'Persian'], ['Coat Care', 'Yes'], ['Flavour', 'Chicken']],
  },
  {
    id: 26, name: 'Royal Canin Kitten Dry Food', brand: 'Royal Canin', category: 'Kitten Food',
    price: 1799, compare: 2099, rating: 4.9, reviews: 690, image: '/images/products/26.jpg', emoji: '🐈',
    tag: 'Top Rated', petType: 'Cat', pet: 'Cat', lifeStage: 'Kitten', foodType: 'Dry',
    desc: 'Highly digestible nutrition for kittens up to 12 months, with antioxidants for developing immunity.',
    specs: [['Weight', '2 kg'], ['Life Stage', 'Kitten'], ['Made For', 'Up to 12 months'], ['Antioxidants', 'Added'], ['Flavour', 'Chicken']],
  },
  {
    id: 27, name: 'Farmina N&D Cat Chicken & Pomegranate', brand: 'Farmina', category: 'Adult Cat Food',
    price: 2999, compare: 3499, rating: 4.7, reviews: 320, image: '/images/products/27.jpg', emoji: '🐟',
    tag: 'Popular', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Grain-free, high-protein recipe with boneless chicken and pomegranate for adult cats.',
    specs: [['Weight', '1.5 kg'], ['Life Stage', 'Adult'], ['Grain', 'Grain-Free'], ['Protein', '44%'], ['Flavour', 'Chicken & Pomegranate']],
  },
  {
    id: 28, name: 'Whiskas Adult Ocean Fish Dry', brand: 'Whiskas', category: 'Cat Dry Food',
    price: 699, compare: 849, rating: 4.5, reviews: 1480, image: '/images/products/28.jpg', emoji: '🐟',
    tag: 'Best Seller', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Crunchy ocean-fish kibble with taurine for healthy eyes and heart, plus a balanced nutrient mix.',
    specs: [['Weight', '1.2 kg'], ['Life Stage', 'Adult'], ['Taurine', 'Added'], ['Flavour', 'Ocean Fish'], ['Made In', 'India']],
  },
  {
    id: 29, name: 'Whiskas Tuna in Gravy Wet Pouch', brand: 'Whiskas', category: 'Cat Gravy',
    price: 599, compare: 699, rating: 4.6, reviews: 1120, image: '/images/products/29.jpg', emoji: '🍲',
    tag: 'Popular', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Gravy',
    desc: 'Succulent tuna pieces in a rich gravy — a tasty, hydrating wet meal cats can’t resist.',
    specs: [['Weight', '85 g × 12'], ['Life Stage', 'Adult'], ['Form', 'Tuna in Gravy'], ['Pack', '12 pouches'], ['Moisture', '80%']],
  },
  {
    id: 30, name: 'Whiskas Kitten Ocean Fish Dry', brand: 'Whiskas', category: 'Kitten Food',
    price: 749, compare: 899, rating: 4.6, reviews: 560, image: '/images/products/30.jpg', emoji: '🐈',
    tag: 'New', petType: 'Cat', pet: 'Cat', lifeStage: 'Kitten', foodType: 'Dry',
    desc: 'Mom’s milk-inspired nutrition for kittens 2–12 months, with DHA and calcium for growth.',
    specs: [['Weight', '1.1 kg'], ['Life Stage', 'Kitten'], ['DHA', 'Added'], ['Flavour', 'Ocean Fish'], ['Made For', '2–12 months']],
  },
  {
    id: 31, name: 'Sheba Premium Tuna Wet Cat Food', brand: 'Sheba', category: 'Cat Wet Food',
    price: 899, compare: 1099, rating: 4.7, reviews: 480, image: '/images/products/31.jpg', emoji: '🐟',
    tag: 'Premium', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Wet',
    desc: 'Gourmet, flaky tuna in a delicate broth — a premium wet treat with no artificial colours.',
    specs: [['Weight', '70 g × 12'], ['Life Stage', 'Adult'], ['Form', 'Flaked Tuna'], ['Pack', '12 cans'], ['Artificial Colour', 'No']],
  },
  {
    id: 32, name: 'Me-O Tuna Adult Dry Cat Food', brand: 'Me-O', category: 'Cat Dry Food',
    price: 549, compare: 649, rating: 4.4, reviews: 910, image: '/images/products/32.jpg', emoji: '🐱',
    tag: 'Sale', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Complete and balanced tuna recipe with taurine and a urinary-care formula for adult cats.',
    specs: [['Weight', '1.2 kg'], ['Life Stage', 'Adult'], ['Taurine', 'Added'], ['Urinary Care', 'Yes'], ['Flavour', 'Tuna']],
  },
  {
    id: 33, name: 'Felix Senses Jelly Wet Cat Food', brand: 'Felix', category: 'Cat Wet Food',
    price: 799, compare: 949, rating: 4.5, reviews: 430, image: '/images/products/33.jpg', emoji: '🥫',
    tag: 'Popular', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Wet',
    desc: 'Tender meaty pieces in a soft jelly, in a variety of flavours cats love at mealtime.',
    specs: [['Weight', '85 g × 12'], ['Life Stage', 'Adult'], ['Form', 'Pieces in Jelly'], ['Pack', '12 pouches'], ['Variety', 'Mixed']],
  },
  {
    id: 34, name: 'Temptations Tasty Chicken Cat Treats', brand: 'Temptations', category: 'Cat Treats',
    price: 299, compare: 379, rating: 4.7, reviews: 1340, image: '/images/products/34.jpg', emoji: '🍪',
    tag: 'Best Seller', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Treat',
    desc: 'Crunchy on the outside, soft on the inside — irresistible chicken-flavoured rewards under 2 kcal each.',
    specs: [['Weight', '85 g'], ['Form', 'Crunchy treat'], ['Flavour', 'Chicken'], ['Calories', '<2 kcal/treat'], ['Use', 'Reward']],
  },
  {
    id: 35, name: 'Drools Cat Food Ocean Fish', brand: 'Drools', category: 'Cat Dry Food',
    price: 849, compare: 999, rating: 4.4, reviews: 670, image: '/images/products/35.jpg', emoji: '🐟',
    tag: 'Trending', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Ocean-fish recipe enriched with taurine and omega fatty acids for a shiny coat and healthy heart.',
    specs: [['Weight', '1.2 kg'], ['Life Stage', 'Adult'], ['Taurine', 'Added'], ['Flavour', 'Ocean Fish'], ['Made In', 'India']],
  },
  {
    id: 36, name: 'Purepet Cat Food Mackerel', brand: 'Purepet', category: 'Cat Dry Food',
    price: 699, compare: 849, rating: 4.2, reviews: 520, image: '/images/products/36.jpg', emoji: '🐟',
    tag: 'Sale', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Affordable mackerel recipe with essential vitamins and minerals for everyday feline health.',
    specs: [['Weight', '1.2 kg'], ['Life Stage', 'Adult'], ['Flavour', 'Mackerel'], ['Taurine', 'Added'], ['Made In', 'India']],
  },
  {
    id: 37, name: 'SmartHeart Cat Tuna Adult', brand: 'SmartHeart', category: 'Adult Cat Food',
    price: 599, compare: 729, rating: 4.3, reviews: 600, image: '/images/products/37.jpg', emoji: '🐱',
    tag: 'Popular', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Dry',
    desc: 'Tuna-flavoured complete nutrition with taurine and a hairball-control fibre blend.',
    specs: [['Weight', '1.1 kg'], ['Life Stage', 'Adult'], ['Hairball Control', 'Yes'], ['Taurine', 'Added'], ['Flavour', 'Tuna']],
  },
  {
    id: 38, name: 'Kennel Kitchen Cat Chicken Pâté', brand: 'Kennel Kitchen', category: 'Cat Wet Food',
    price: 459, compare: 559, rating: 4.5, reviews: 240, image: '/images/products/38.jpg', emoji: '🥫',
    tag: 'New', petType: 'Cat', pet: 'Cat', lifeStage: 'Adult', foodType: 'Wet',
    desc: 'Smooth, grain-free chicken pâté made with real meat — a soft, palatable complete wet meal.',
    specs: [['Weight', '156 g × 6'], ['Life Stage', 'Adult'], ['Form', 'Pâté'], ['Grain', 'Grain-Free'], ['Pack', '6 cans']],
  },
]

export const MOCK_PRODUCTS_BY_ID = Object.fromEntries(
  MOCK_PRODUCTS.map((product) => [product.id, product])
)
