import AccountIcon from "../../assets/svg/account.svg?react";
import HeartIcon from "../../assets/svg/heart.svg?react";
import CartIcon from "../../assets/svg/cart.svg?react";
import SearchIcon from "../../assets/svg/search.svg?react";
import { Link } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Header = () => {
    const user = useSelector((state: RootState) => state.user.user);

    return (
        <header className="relative py-[10px] px-[20px] md:px-[35px] h-[75px] md:h-[85px] flex justify-end items-center w-full bg-white z-[100] shadow-custom border-b border-gray-200">
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
                    <li>
                        <Link to="cart" className="relative">
                            <div className="absolute top-[-10px] right-[-10px] bg-black w-[20px] h-[20px] flex items-center justify-center text-[8px] font-bold rounded-[50%] border-2 border-white text-white">
                                {user?.cart.length}
                            </div>
                            <CartIcon className="stroke-black w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link to="likes" className="relative">
                            <div className="absolute top-[-10px] right-[-10px] bg-black w-[20px] h-[20px] flex items-center justify-center text-[8px] font-bold rounded-[50%] border-2 border-white text-white">
                                {user?.favorites.length}
                            </div>
                            <HeartIcon className="stroke-black w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link to="account">
                            <AccountIcon className="fill-black w-6 h-6" />
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
