export interface ICollection {
    name: string;
    path: string;
    categories: ICategory[];
}

export interface ICategory {
    name: string;
    path: string;
    subcategories: ISubcategory[];
}

export interface ISubcategory {
    name: string;
    path: string;
    subcategories: IProduct[];
}

export interface IProduct {
    name: string;
    brand: string;
    price: number;
    image: string;
}
