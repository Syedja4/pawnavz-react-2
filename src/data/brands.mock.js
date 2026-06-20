/**
 * Static brand catalogue for the Pawnavz pet-food store (India market).
 *
 * Frontend-only mock data. Brands are tagged with the pet types they cover via
 * `petTypes`, so a single brand (e.g. Royal Canin) can surface under both the
 * Dog and Cat listings without being duplicated.
 *
 * @typedef {'Dog' | 'Cat'} PetType
 *
 * @typedef {Object} Brand
 * @property {number}     id          Stable identifier.
 * @property {string}     name        Display name.
 * @property {string}     slug        URL-safe identifier.
 * @property {PetType[]}  petTypes    Pet types this brand makes food for.
 * @property {string}     logo        Emoji used as a lightweight logo stand-in.
 * @property {string}     description Short marketing blurb.
 */

/** @type {Brand[]} */
export const BRANDS = [
  { id: 1, name: 'Royal Canin', slug: 'royal-canin', petTypes: ['Dog', 'Cat'], logo: '👑', description: 'Breed-specific, vet-recommended precision nutrition.' },
  { id: 2, name: 'Farmina', slug: 'farmina', petTypes: ['Dog', 'Cat'], logo: '🌿', description: 'Italian science-backed natural & low-grain recipes.' },
  { id: 3, name: 'Drools', slug: 'drools', petTypes: ['Dog', 'Cat'], logo: '🦴', description: 'India’s everyday favourite, real chicken & egg.' },
  { id: 4, name: 'Pedigree', slug: 'pedigree', petTypes: ['Dog'], logo: '🐕', description: 'Complete daily nutrition trusted by pawrents.' },
  { id: 5, name: 'Purepet', slug: 'purepet', petTypes: ['Dog', 'Cat'], logo: '🥩', description: 'Wholesome value nutrition for growing pets.' },
  { id: 6, name: 'SmartHeart', slug: 'smartheart', petTypes: ['Dog', 'Cat'], logo: '❤️', description: 'Brain & heart focused balanced formulas.' },
  { id: 7, name: 'Kennel Kitchen', slug: 'kennel-kitchen', petTypes: ['Dog', 'Cat'], logo: '🍳', description: 'Real-food, kitchen-style recipes made in India.' },
  { id: 8, name: 'Acana', slug: 'acana', petTypes: ['Dog'], logo: '🌾', description: 'Biologically appropriate, regionally sourced.' },
  { id: 9, name: 'Orijen', slug: 'orijen', petTypes: ['Dog'], logo: '🥩', description: 'Premium protein-rich whole-prey nutrition.' },
  { id: 10, name: 'Taste of the Wild', slug: 'taste-of-the-wild', petTypes: ['Dog'], logo: '🦬', description: 'Grain-free recipes inspired by the wild diet.' },
  { id: 11, name: 'JerHigh', slug: 'jerhigh', petTypes: ['Dog'], logo: '🍪', description: 'Soft, tasty training treats dogs adore.' },
  { id: 12, name: 'Chip Chops', slug: 'chip-chops', petTypes: ['Dog'], logo: '🍗', description: 'Real-meat chips, strips & rewards.' },
  { id: 13, name: 'Dogsee', slug: 'dogsee', petTypes: ['Dog'], logo: '🧀', description: 'Himalayan cheese chews, single-ingredient.' },
  { id: 14, name: 'Himalaya Healthy Pet', slug: 'himalaya-healthy-pet', petTypes: ['Dog'], logo: '🌱', description: 'Ayurveda-inspired supplements & treats.' },
  { id: 15, name: 'Fidele', slug: 'fidele', petTypes: ['Dog'], logo: '🐾', description: 'Holistic life-stage nutrition.' },
  { id: 16, name: 'Purina Pro Plan', slug: 'purina-pro-plan', petTypes: ['Dog'], logo: '🔬', description: 'Advanced, performance-driven recipes.' },
  { id: 17, name: 'Whiskas', slug: 'whiskas', petTypes: ['Cat'], logo: '🐱', description: 'Tasty everyday meals cats love.' },
  { id: 18, name: 'Sheba', slug: 'sheba', petTypes: ['Cat'], logo: '🐟', description: 'Gourmet wet food for the discerning cat.' },
  { id: 19, name: 'Me-O', slug: 'me-o', petTypes: ['Cat'], logo: '😻', description: 'Complete nutrition with taurine for vitality.' },
  { id: 20, name: 'Felix', slug: 'felix', petTypes: ['Cat'], logo: '🐈', description: 'Irresistibly tasty jelly & gravy meals.' },
  { id: 21, name: 'Temptations', slug: 'temptations', petTypes: ['Cat'], logo: '✨', description: 'Crunchy-outside, soft-inside cat treats.' },
]

export const BRANDS_BY_ID = Object.fromEntries(
  BRANDS.map((brand) => [brand.id, brand])
)

/**
 * Brands that carry products for a given pet type.
 * @param {PetType} petType
 * @returns {Brand[]}
 */
export function getBrandsByPet(petType) {
  return BRANDS.filter((brand) => brand.petTypes.includes(petType))
}

/**
 * Look up a brand by its slug.
 * @param {string} slug
 * @returns {Brand | null}
 */
export function getBrandBySlug(slug) {
  return BRANDS.find((brand) => brand.slug === slug) ?? null
}
