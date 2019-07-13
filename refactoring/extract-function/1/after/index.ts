import {
  Product,
  ShopifyEntry,
  PopulateEntry,
} from "./types";

import {
  formatProductEntry,
  getEntry,
  getMatchingProductCodes,
  removeNonEntries,
} from "./utils";

export function getProductEntries(
  coreItemProducts: Product[],
  products: Product[],
  shopifyEntries: ShopifyEntry[],
): PopulateEntry[] {
  const entries = coreItemProducts.map((coreProduct) => {
    return formatProductEntry(
      getEntry(shopifyEntries, getMatchingProductCodes(products, coreProduct)),
      coreProduct
    );
  });

  return removeNonEntries(entries);
}
