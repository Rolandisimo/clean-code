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

function getProductEntries(): PopulateEntry[] {
  const coreItemProducts: Product[] = [];
  const products: Product[] = [];
  const shopifyEntries: ShopifyEntry[] = [];

  const entries = coreItemProducts.map((coreProduct) => {
    return formatProductEntry(
      getEntry(shopifyEntries, getMatchingProductCodes(products, coreProduct)),
      coreProduct
    );
  });

  return removeNonEntries(entries);
}
