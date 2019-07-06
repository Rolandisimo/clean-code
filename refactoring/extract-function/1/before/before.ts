import {
  Product,
  PopulateEntry,
  ShopifyEntry,
} from "./types";

function getProductEntries(): PopulateEntry[] {
  const coreItemProducts: Product[] = [];
  const shopifyEntries: ShopifyEntry[] = [];
  const products: Product[] = [];

  return coreItemProducts.map((coreProduct) => {
    const productCodes = products
      .filter(product => coreProduct.coreItemCode === product.coreItemCode)
      .map(product => product.productCode);

    const entry = shopifyEntries.find((shopifyEntry) =>
      shopifyEntry.productCodes.some(shopifyCode =>
        productCodes.some(productCode =>
          shopifyCode.toUpperCase() === productCode.toUpperCase()
        )
      )
    );

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
  }).filter((el): el is Exclude<typeof el, undefined> => !!el);
}
