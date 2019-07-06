import {
  Entry,
  Product,
  ShopifyEntry,
  PopulateEntry,
} from "./types";

export function getMatchingProductCodes(products: Product[], coreProduct: Product) {
  return products
    .filter(product => coreProduct.coreItemCode === product.coreItemCode)
    .map(product => product.productCode);
}

export function getEntry(shopifyEntries: ShopifyEntry[], productCodes: string[]) {
  return shopifyEntries.find((shopifyEntry) => {
    shopifyEntry.productCodes.some(shopifyCode =>
      productCodes.some(productCode => doStringsMatch(shopifyCode, productCode))
    )
  });
}

export function doStringsMatch(first: string, second: string, caseSensitive = false) {
  if (caseSensitive) {
    return first === second;
  }

  return first.toUpperCase() === second.toUpperCase();
}

export function removeNonEntries(entries: (PopulateEntry | undefined)[]) {
  return entries.filter((el): el is Exclude<typeof el, undefined> => !!el);
}

export function formatProductEntry(entry: Entry | undefined, coreProduct: Product): PopulateEntry | undefined {
  if (!entry) {
    return;
  }

  return {
    title: entry.title,
    publicUrl: entry.publicUrl || null,
    description: entry.description || null,
    images: entry.images.length ? entry.images : null,
    coreItemCode: coreProduct.coreItemCode,
  }
}
