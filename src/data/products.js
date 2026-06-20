/**
 * Product data accessors used across the app.
 *
 * Data now originates from the static mock catalogue in `products.mock.js`
 * (which carries the full per-product `desc` + `specs`), surfaced here through
 * the same exports the UI has always imported — so existing components keep
 * working unchanged. To move to a real backend later, see `./api.js`.
 */

import { MOCK_PRODUCTS, MOCK_PRODUCTS_BY_ID } from './products.mock'

export const PRODUCTS = MOCK_PRODUCTS

export const PRODUCTS_BY_ID = MOCK_PRODUCTS_BY_ID

export function getProductCardById(id) {
  return PRODUCTS_BY_ID[id] ?? null
}

export function getProductById(id) {
  return PRODUCTS_BY_ID[id] ?? null
}
