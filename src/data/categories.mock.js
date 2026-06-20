/**
 * Static "Shop By Category" catalogue for the Pawnavz pet-food store.
 *
 * Frontend-only mock data. Each category maps to the product fields used for
 * filtering (`petType`, `foodType`, and an optional `lifeStage`) so the Shop
 * page can pre-filter when a category card is clicked.
 *
 * @typedef {'Dog' | 'Cat'} PetType
 * @typedef {'Dry' | 'Wet' | 'Gravy' | 'Treat' | 'Supplement'} FoodType
 * @typedef {'Puppy' | 'Adult' | 'Senior' | 'Kitten'} LifeStage
 *
 * @typedef {Object} Category
 * @property {number}          id        Stable identifier.
 * @property {string}          name      Display name.
 * @property {string}          slug      URL-safe identifier.
 * @property {PetType}         petType   Pet this category belongs to.
 * @property {FoodType}        foodType  Food type represented by the category.
 * @property {LifeStage|null}  lifeStage Life stage targeted, or null if general.
 * @property {string}          icon      Emoji used in the category grid.
 */

/** @type {Category[]} */
export const CATEGORIES = [
  // Dog
  { id: 1, name: 'Dog Dry Food', slug: 'dog-dry-food', petType: 'Dog', foodType: 'Dry', lifeStage: null, icon: '🦴' },
  { id: 2, name: 'Dog Wet Food', slug: 'dog-wet-food', petType: 'Dog', foodType: 'Wet', lifeStage: null, icon: '🥫' },
  { id: 3, name: 'Dog Gravy', slug: 'dog-gravy', petType: 'Dog', foodType: 'Gravy', lifeStage: null, icon: '🍲' },
  { id: 4, name: 'Dog Treats', slug: 'dog-treats', petType: 'Dog', foodType: 'Treat', lifeStage: null, icon: '🍪' },
  { id: 5, name: 'Dog Supplements', slug: 'dog-supplements', petType: 'Dog', foodType: 'Supplement', lifeStage: null, icon: '💊' },
  { id: 6, name: 'Puppy Food', slug: 'puppy-food', petType: 'Dog', foodType: 'Dry', lifeStage: 'Puppy', icon: '🐶' },
  { id: 7, name: 'Adult Dog Food', slug: 'adult-dog-food', petType: 'Dog', foodType: 'Dry', lifeStage: 'Adult', icon: '🐕' },
  { id: 8, name: 'Senior Dog Food', slug: 'senior-dog-food', petType: 'Dog', foodType: 'Dry', lifeStage: 'Senior', icon: '🦮' },
  // Cat
  { id: 9, name: 'Cat Dry Food', slug: 'cat-dry-food', petType: 'Cat', foodType: 'Dry', lifeStage: null, icon: '🐟' },
  { id: 10, name: 'Cat Wet Food', slug: 'cat-wet-food', petType: 'Cat', foodType: 'Wet', lifeStage: null, icon: '🥫' },
  { id: 11, name: 'Cat Gravy', slug: 'cat-gravy', petType: 'Cat', foodType: 'Gravy', lifeStage: null, icon: '🍲' },
  { id: 12, name: 'Cat Treats', slug: 'cat-treats', petType: 'Cat', foodType: 'Treat', lifeStage: null, icon: '🍪' },
  { id: 13, name: 'Cat Supplements', slug: 'cat-supplements', petType: 'Cat', foodType: 'Supplement', lifeStage: null, icon: '💊' },
  { id: 14, name: 'Kitten Food', slug: 'kitten-food', petType: 'Cat', foodType: 'Dry', lifeStage: 'Kitten', icon: '🐱' },
  { id: 15, name: 'Adult Cat Food', slug: 'adult-cat-food', petType: 'Cat', foodType: 'Dry', lifeStage: 'Adult', icon: '🐈' },
  { id: 16, name: 'Senior Cat Food', slug: 'senior-cat-food', petType: 'Cat', foodType: 'Dry', lifeStage: 'Senior', icon: '🐈‍⬛' },
]

export const CATEGORIES_BY_ID = Object.fromEntries(
  CATEGORIES.map((category) => [category.id, category])
)

/**
 * Categories for a given pet type.
 * @param {PetType} petType
 * @returns {Category[]}
 */
export function getCategoriesByPet(petType) {
  return CATEGORIES.filter((category) => category.petType === petType)
}

/**
 * Look up a category by its slug.
 * @param {string} slug
 * @returns {Category | null}
 */
export function getCategoryBySlug(slug) {
  return CATEGORIES.find((category) => category.slug === slug) ?? null
}
