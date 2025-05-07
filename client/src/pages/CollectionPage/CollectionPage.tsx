import { Link } from "react-router";

import { useProductTree } from "../../hooks/useProductTree";

const CollectionPage = () => {
    const { collection } = useProductTree();

    if (!collection) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Коллекцію не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <h3 className="mt-[30px] text-2xl uppercase font-bold">
                Доступні категорії:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[30px]">
                {collection.categories.map((category, i) => (
                    <li key={i}>
                        <Link
                            to={`${location.pathname}/${category.path}`}
                            className="relative block"
                        >
                            <div className="absolute top-0 left-0 bg-black text-white px-[25px] py-[15px] text-lg z-10">
                                {category.name}
                            </div>
                            <img
                                src={category.banner}
                                alt={category.name}
                                className="w-full h-auto"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollectionPage;
