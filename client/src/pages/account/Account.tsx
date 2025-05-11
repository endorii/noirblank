import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import NewPostLogo from "../../assets/img/newpost.jpg";
import CardLogo from "../../assets/svg/card.svg";

import EditIcon from "../../assets/svg/edit.svg?react";

const Account = () => {
    const user = useSelector((state: RootState) => state.user.user);

    const replasePassword = (password?: string) => {
        let result = "";
        if (password) {
            for (let i = 0; i < password.length; i++) {
                result += "*";
            }
        }
        return result;
    };

    return (
        <div>
            <h3 className="mt-[30px] text-xl uppercase font-bold">
                Сторінка акаунту:
            </h3>
            <div className="flex w-full justify-between mt-[30px] items-stretch gap-[20px]">
                <div className="flex flex-col gap-[10px] w-[32%]">
                    <div className="font-bold">Основна інформація</div>
                    <ul className="relative bg-gray-50 p-[40px] flex flex-col gap-[7px] h-full">
                        <button className="absolute top-0 right-0 group flex text-xs items-center gap-[20px] border border-transparent hover:text-black hover:border-black hover:bg-white bg-black text-white p-[10px] transition-all duration-300 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 disabled:cursor-not-allowed">
                            <EditIcon className="w-[20px] stroke-white group-hover:stroke-black transition-all duration-300" />
                        </button>
                        <li>{user?.username}</li>
                        <li>{user?.email}</li>
                        <li>{user?.phone}</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[10px] w-[32%]">
                    <div className="font-bold">Адреса доставки</div>
                    <ul className="relative bg-gray-50 p-[40px] flex flex-col gap-[7px] h-full">
                        <button className="absolute top-0 right-0 group flex text-xs items-center gap-[20px] border border-transparent hover:text-black hover:border-black hover:bg-white bg-black text-white p-[10px] transition-all duration-300 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 disabled:cursor-not-allowed">
                            <EditIcon className="w-[20px] stroke-white group-hover:stroke-black transition-all duration-300" />
                        </button>
                        <li>{user?.shippingAddress.recipient}</li>
                        <li>
                            {user?.shippingAddress.country},{" "}
                            {user?.shippingAddress.region}
                        </li>
                        <li>
                            {user?.shippingAddress.city},{" "}
                            {user?.shippingAddress.street}{" "}
                            {user?.shippingAddress.building}, кв.{" "}
                            {user?.shippingAddress.apartment}
                        </li>
                        <li>{user?.shippingAddress.postalCode}</li>
                    </ul>
                </div>
                <div className="flex flex-col gap-[10px] w-[32%]">
                    <div className="font-bold">Доставка та оплата</div>
                    <div className="relative bg-gray-50 p-[40px] flex flex-col gap-[7px] h-full">
                        <div className="flex gap-[10px] items-center">
                            <img
                                src={NewPostLogo}
                                alt=""
                                className="max-w-[40px]"
                            />
                            <div>У відділення Нова Пошта</div>
                        </div>
                        <hr className="mt-[10px] border-b border-gray-200" />
                        <div className="flex gap-[10px] items-center">
                            <img
                                src={CardLogo}
                                alt=""
                                className="max-w-[40px]"
                            />
                            <div>Оплата карткою онлайн</div>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <div className="font-bold">Зміна паролю</div>
                <div className="relative bg-gray-50 p-[40px] flex flex-col gap-[7px]">
                    <button className="absolute top-0 right-0 group flex text-xs items-center gap-[20px] border border-transparent hover:text-black hover:border-black hover:bg-white bg-black text-white p-[10px] transition-all duration-300 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 disabled:cursor-not-allowed">
                        <EditIcon className="w-[20px] stroke-white group-hover:stroke-black transition-all duration-300" />
                    </button>
                    <div>{replasePassword(user?.password)}</div>
                </div>
            </div>
        </div>
    );
};

export default Account;
