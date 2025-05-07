import { Link } from "react-router";

import { useLocation } from "react-router";
import { useProductTree } from "../../hooks/useProductTree";

const CategoryPage = () => {
    const location = useLocation();

    const { collection, category } = useProductTree();

    if (!collection) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Товари для цієї категорії не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <h3 className="mt-[30px] text-2xl uppercase font-bold">
                Доступні товари:
            </h3>
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-[20px] mt-[30px]">
                {category?.products.map((product, i) => (
                    <li key={i}>
                        <Link
                            to={`${location.pathname}/${product.path}`}
                            className="relative block"
                        >
                            <div className="absolute top-0 left-0 bg-black text-white px-[25px] py-[15px] text-lg z-10">
                                {product.name}
                            </div>
                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-auto"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;
