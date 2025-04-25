import { Link, NavLink } from "react-router";

import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import { useEffect } from "react";
import { fetchCategories } from "../../store/slices/categories.slice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { ICategory } from "../../types/dbtypes";

const Header = () => {
    const dispatch = useAppDispatch();

    const navItems = [
        { to: "cart", Icon: CartIcon, className: "stroke-black" },
        { to: "likes", Icon: HeartIcon, className: "stroke-black" },
        { to: "account", Icon: AccountIcon, className: "fill-black" },
    ];

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    const categories = useSelector(
        (state: RootState) => state.categories.categories as ICategory[]
    );

    const currentCategoryPath =
        localStorage.getItem("currentCategory") ||
        location.pathname.split("/")[1];

    const activeCategory = categories.find(
        (category) => category.path === currentCategoryPath
    );

    return (
        <>
            <header className="py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex justify-between items-center w-full bg-white z-[100] shadow-custom">
                <nav className="flex gap-[25px]">
                    {categories.map((category, i: number) => (
                        <div key={i}>
                            <NavLink
                                to={category.path}
                                onClick={() => {
                                    localStorage.setItem(
                                        "currentCategory",
                                        category.path
                                    );
                                }}
                                className={({ isActive, isPending }) =>
                                    isPending
                                        ? "pending"
                                        : isActive
                                        ? "border-b"
                                        : ""
                                }
                            >
                                {category.name}
                            </NavLink>
                        </div>
                    ))}
                </nav>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#" className="font-bold text-3xl tracking-tighter">
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
                <ul className="flex gap-[20px] text-sm">
                    {activeCategory?.subcategories.map((subcategory, i) => (
                        <li key={i}>{subcategory.name}</li>
                    ))}
                </ul>

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
