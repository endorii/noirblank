import { Link, NavLink } from "react-router";

import InstagramLogo from "../../assets/svg/instagram.svg?react";
import TelegramLogo from "../../assets/svg/telegram.svg?react";
import TiktokLogo from "../../assets/svg/tiktok.svg?react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Footer = () => {
    const collections = useSelector(
        (state: RootState) => state.collections.collections
    );

    return (
        <div className="bg-black p-[50px] flex justify-between text-white">
            <div className="flex flex-col gap-[25px] w-[350px] text-sm">
                <Link to="/" className="font-bold text-3xl tracking-tighter">
                    mindset
                </Link>
                <hr className="w-[50%]" />
                <div className="">
                    Створено для тих, кому є різниця у чому ходити. Для тих, у
                    кого його стиль - це його вайб.
                </div>
            </div>
            <div>
                <div className="text-center font-bold mb-[5px]">Колекції:</div>
                <ul className="flex gap-[10px]">
                    {collections.map((collection, i) => {
                        return (
                            <li key={i}>
                                <NavLink
                                    to={collection.path}
                                    className={({ isActive, isPending }) => {
                                        const base =
                                            "flex items-center justify-center cursor-pointer lowercase transition-all duration-300";
                                        const state =
                                            isPending || !isActive
                                                ? ""
                                                : "border-b border-white";
                                        return `${base} ${state}`;
                                    }}
                                >
                                    {collection.name}
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div>
                <ul className="flex gap-[20px]">
                    <li>
                        <button className="cursor-pointer p-[10px] border borer-white rounded-[50%] hover:bg-white group transition-all duration-300">
                            <Link to={"#"}>
                                <InstagramLogo className="w-[17px] fill-white group-hover:fill-black" />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer p-[10px] border borer-white rounded-[50%] hover:bg-white group transition-all duration-300">
                            <Link to={"#"}>
                                <TelegramLogo className="w-[17px] fill-white group-hover:fill-black" />
                            </Link>
                        </button>
                    </li>
                    <li>
                        <button className="cursor-pointer p-[10px] border borer-white rounded-[50%] hover:bg-white group transition-all duration-300">
                            <Link to={"#"}>
                                <TiktokLogo className="w-[17px] fill-white group-hover:fill-black" />
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Footer;
