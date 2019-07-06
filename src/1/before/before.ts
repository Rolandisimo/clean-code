interface Product {
  productCode: string;
  coreItemCode: string;
}

interface ShopifyEntry {
  productCodes: string[];
  title: string;
  publicUrl: string;
  description: string;
}

function getProductEntries() {
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
      publicUrl: entry.publicUrl,
      description: entry.description,
    }
  }).filter((el): el is Exclude<typeof el, undefined> => !!el);
}
