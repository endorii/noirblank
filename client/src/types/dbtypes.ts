export interface IProduct {
    name: string;
    brand: string;
    price: number;
    image: string;
}

export interface ISubcategory {
    name: string;
    path: string;
    products: IProduct[];
}

export interface ICategory {
    name: string;
    path: string;
    subcategories: ISubcategory[];
}
