/**
 * Single data-access point for the storefront.
 *
 * Today this serves static mock data synchronously. When a real backend is
 * ready, only the bodies of `api.*` below need to change — the UI keeps calling
 * `api.getProducts()` / `api.getBrands()` / `api.getCategories()` unchanged.
 *
 * Two ways to consume the data are exposed so the swap stays mechanical:
 *
 *   // Synchronous (current usage — direct mock import, matches existing code):
 *   import { mockBrands, mockCategories, mockProducts } from '../data/api'
 *   const brands = mockBrands
 *   const categories = mockCategories
 *   const products = mockProducts
 *
 *   // Async (future usage — swap the source without touching markup):
 *   import { api } from '../data/api'
 *   const brands = await api.getBrands()
 *   const categories = await api.getCategories()
 *   const products = await api.getProducts()
 */

import { BRANDS } from './brands.mock'
import { CATEGORIES } from './categories.mock'
import { MOCK_PRODUCTS, MOCK_PRODUCTS_BY_ID } from './products.mock'

/** Synchronous mock exports (current data source). */
export const mockBrands = BRANDS
export const mockCategories = CATEGORIES
export const mockProducts = MOCK_PRODUCTS

const resolve = (data) => Promise.resolve(data)

/**
 * Async data facade. Swap the bodies for `fetch(...)` calls when the backend
 * exists; the resolved shapes already match the mock data.
 */
export const api = {
  /** @returns {Promise<typeof mockBrands>} */
  getBrands: () => resolve(mockBrands),
  /** @returns {Promise<typeof mockCategories>} */
  getCategories: () => resolve(mockCategories),
  /** @returns {Promise<typeof mockProducts>} */
  getProducts: () => resolve(mockProducts),
  /**
   * @param {number|string} id
   * @returns {Promise<(typeof mockProducts)[number] | null>}
   */
  getProductById: (id) => resolve(MOCK_PRODUCTS_BY_ID[Number(id)] ?? null),
}
