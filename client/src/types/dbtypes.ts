export interface ICollection {
    name: string;
    path: string;
    banner: string;
    categories: ICategory[];
}

export interface ICategory {
    name: string;
    path: string;
    banner: string;
    products: IProduct[];
}

export interface IProduct {
    name: string;
    price: number;
    path: string;
    images: string[];
    available: boolean;
    description: string;
    composition: string;
    sizes: string[];
    type: string[];
    color: string[];
}

export interface IUser {
    username: string;
    email: string;
    password: string;
    phone: string;
    cart: ICartItem[];
    favorites: IFavoriteItem[];
}

export interface ICartItem {
    productPath: IProduct["path"];
    quantity: number;
    size: string;
    color: string;
}

export interface IFavoriteItem {
    productPath: IProduct["path"];
}
