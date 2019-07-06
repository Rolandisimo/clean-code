export interface Product {
  productCode: string;
  coreItemCode: string;
}

export interface Image {}

export interface Entry {
  title: string;
  publicUrl: string;
  description: string;
  images: Image[];
}

export interface ShopifyEntry extends Entry {
  productCodes: string[];
}

export interface PopulateEntry extends Pick<Product, "coreItemCode"> {
  title: string | null;
  publicUrl: string | null;
  description: string | null;
  images: Image[] | null;
}
