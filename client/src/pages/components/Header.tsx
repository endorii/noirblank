import { NavLink } from "react-router";

import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";

const Header = () => {
    const links = [
        { name: "Вона", path: "c/she" },
        { name: "Він", path: "c/he" },
        { name: "Діти", path: "c/kids" },
        { name: "Дім", path: "c/home" },
    ];

    return (
        <>
            <header className="py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex justify-between items-center w-full bg-white z-[100] shadow-custom">
                <nav className="flex gap-[25px]">
                    {links.map((link, i) => (
                        <div key={i}>
                            <NavLink
                                to={link.path}
                                onClick={() => {
                                    localStorage.setItem(
                                        "currentCategory",
                                        link.path
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
                                {link.name}
                            </NavLink>
                        </div>
                    ))}
                </nav>
                <div className="absolute left-1/2 transform -translate-x-1/2">
                    <a href="#" className="font-bold text-3xl tracking-tighter">
                        |NOIRBLANK
                    </a>
                </div>

                <ul className="flex gap-[30px]">
                    <li>
                        <a href="">
                            <CartIcon className="stroke-black w-7 h-7" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <HeartIcon className="stroke-black w-7 h-7" />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <AccountIcon className=" fill-black w-7 h-7" />
                        </a>
                    </li>
                </ul>
            </header>

            <div className="flex bg-gray-100 p-[6px] justify-between px-[30px] items-center">
                <ul className="flex gap-[20px] text-sm">
                    <li>
                        <a href="">Новинки</a>
                    </li>
                    <li>
                        <a href="">Одяг</a>
                    </li>
                    <li>
                        <a href="">Взуття</a>
                    </li>
                    <li>
                        <a href="">Аксесуари</a>
                    </li>
                    <li>
                        <a href="">Спорт</a>
                    </li>
                    <li>
                        <a href="">Преміум</a>
                    </li>
                    <li>
                        <a href="">Бренди</a>
                    </li>
                    <li>
                        <a href="">Розпродаж</a>
                    </li>
                    <li>
                        <a href="">Сумки</a>
                    </li>
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
