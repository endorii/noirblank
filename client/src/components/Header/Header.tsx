import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import { useEffect, useState } from "react";
import { fetchCollections } from "../../store/slices/collections.slice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICategory, ICollection, ISubcategory } from "../../types/dbtypes";
import { Link, NavLink, useLocation } from "react-router";

const Header = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const collections = useSelector(
        (state: RootState) => state.collections.collections as ICollection[]
    );

    const [activeCollection, setActiveCollection] =
        useState<ICollection | null>();
    const [isShown, setIsShown] = useState(false);
    const [currentSubcategory, setCurrentSubcategory] = useState<
        ISubcategory[] | null
    >();
    const [currentCategory, setCurrentCategory] = useState<ICategory | null>();

    const currentCollectionPath =
        localStorage.getItem("currentCollection") ||
        location.pathname.split("/")[1];

    const navItems = [
        { to: "cart", Icon: CartIcon, className: "stroke-black" },
        { to: "likes", Icon: HeartIcon, className: "stroke-black" },
        { to: "account", Icon: AccountIcon, className: "fill-black" },
    ];

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

    useEffect(() => {
        const foundCollection = collections.find(
            (collection) => collection.path === currentCollectionPath
        );
        if (foundCollection) {
            setActiveCollection(foundCollection);
        } else {
            setActiveCollection(collections[0]);
        }

        console.log("collections:", collections);
        console.log("activeCollection:", activeCollection);
    }, [collections, currentCollectionPath]);

    const handleCategoryClick = (collection: ICollection) => {
        localStorage.setItem("currentCollection", collection.path);
        setActiveCollection(collection);
    };

    return (
        <>
            <header
                className="relative py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex justify-between items-center w-full bg-white z-[100] shadow-custom"
                onMouseEnter={() => {
                    setIsShown(false);
                    setCurrentSubcategory(null);
                }}
            >
                <nav className="flex gap-[25px]">
                    {collections.map((collection, i) => (
                        <div key={i}>
                            <NavLink
                                to={collection.path}
                                onClick={() => handleCategoryClick(collection)}
                                className={({ isActive }) =>
                                    isActive ? "border-b" : ""
                                }
                            >
                                {collection.name}
                            </NavLink>
                        </div>
                    ))}
                </nav>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#" className="font-bold text-4xl tracking-tighter">
                        NOIRBLANK
                    </a>
                </div>

                <ul className="flex gap-[30px]">
                    {navItems.map(({ to, Icon, className }) => (
                        <li key={to}>
                            <Link to={to}>
                                <Icon className={`${className} w-6 h-6`} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </header>

            <div className="relative flex bg-gray-100 justify-between px-[25px] items-center">
                {activeCollection && activeCollection.categories.length > 0 && (
                    <ul className="flex gap-[10px] text-sm">
                        {activeCollection.categories.map((category, i) => (
                            <NavLink
                                to={`${activeCollection.path}/${category.path}`}
                                className={({ isActive }) =>
                                    isActive ? "border-b" : ""
                                }
                            >
                                <li
                                    className={`h-[40px] flex items-center hover:bg-white hover:border-b px-[10px] ${
                                        category.subcategories ===
                                        currentSubcategory
                                            ? "border-b bg-white"
                                            : ""
                                    }`}
                                    key={i}
                                    onMouseEnter={() => {
                                        setIsShown(true);
                                        setCurrentCategory(category);
                                        setCurrentSubcategory(
                                            category.subcategories
                                        );
                                    }}
                                    onMouseLeave={() => {
                                        setIsShown(false);
                                    }}
                                >
                                    {category.name}
                                </li>
                            </NavLink>
                        ))}
                    </ul>
                )}

                <div className="relative">
                    <SearchIcon className="stroke-black w-5 h-5 absolute right-0 top-[50%] translate-y-[-50%]" />
                    <input
                        type="text"
                        className="border-b text-xs py-2 outline-0 w-[200px]"
                        placeholder="знайти щось"
                    />
                </div>
            </div>
            {isShown && (
                <div className="bg-black/20 absolute w-full h-[calc(100vh-120px)] left-0 top-[120px] ">
                    <ul
                        className="bg-white p-[35px] flex flex-col gap-[7px]"
                        onMouseEnter={() => {
                            setIsShown(true);
                        }}
                        onMouseLeave={() => {
                            setIsShown(false);
                            setCurrentSubcategory(null);
                        }}
                    >
                        {currentSubcategory?.map((subcategory, i) => {
                            return (
                                <Link
                                    to={`${activeCollection?.path}/${currentCategory?.path}/${subcategory.path}`}
                                    onClick={() => {
                                        setIsShown(false);
                                    }}
                                >
                                    <li key={i} className="text-sm">
                                        {subcategory.name}
                                    </li>
                                </Link>
                            );
                        })}
                    </ul>
                </div>
            )}
        </>
    );
};

export default Header;
