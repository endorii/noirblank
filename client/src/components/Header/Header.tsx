import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import { Link } from "react-router";

const Header = () => {
    const navItems = [
        { to: "cart", Icon: CartIcon, className: "stroke-black" },
        { to: "likes", Icon: HeartIcon, className: "stroke-black" },
        { to: "account", Icon: AccountIcon, className: "fill-black" },
    ];

    return (
        <header className="relative py-[10px] px-[20px] md:px-[35px] h-[70px] md:h-[80px] flex  justify-end items-center w-full bg-white z-[100] shadow-custom border-b border-gray-200">
            <div className="absolute left-1/2 transform -translate-x-1/2">
                <Link to="/" className="font-bold text-4xl tracking-tighter">
                    mindset
                </Link>
            </div>

            <div className="flex items-center gap-[30px]">
                <div className="relative">
                    <SearchIcon className="stroke-black w-5 h-5 absolute right-0 top-[50%] translate-y-[-50%]" />
                    <input
                        type="text"
                        className="border-b text-xs py-2 outline-0 w-[200px]"
                        placeholder="знайти щось"
                    />
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
            </div>
        </header>
    );
};

export default Header;
