import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import { useEffect, useState } from "react";
import { fetchCollections } from "../../store/slices/collections.slice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICollection } from "../../types/dbtypes";
import { Link, NavLink, useLocation } from "react-router";

const Header = () => {
    const dispatch = useAppDispatch();
    const location = useLocation();
    const collections = useSelector(
        (state: RootState) => state.collections.collections as ICollection[]
    );

    const [activeCollection, setActiveCollection] =
        useState<ICollection | null>();

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

    console.log(location.pathname);

    return (
        <>
            <header className="py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex justify-between items-center w-full bg-white z-[100] shadow-custom">
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

            <div className="flex bg-gray-100 p-[6px] justify-between px-[30px] items-center">
                {activeCollection && activeCollection.categories.length > 0 && (
                    <ul className="flex gap-[20px] text-sm">
                        {activeCollection.categories.map((category, i) => (
                            <li key={i}>
                                <Link
                                    to={`${activeCollection.path}/${category.path}`}
                                >
                                    {category.name}
                                </Link>
                            </li>
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
        </>
    );
};

export default Header;
