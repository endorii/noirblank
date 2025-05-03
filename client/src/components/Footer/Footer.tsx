import { Link } from "react-router";

const Footer = () => {
    return (
        <div className="bg-black p-[50px] flex justify-between text-white">
            <div className="flex flex-col gap-[25px] w-[350px] text-sm">
                <Link to="/" className="font-bold text-3xl tracking-tighter">
                    mindset
                </Link>
                <div className="">
                    Створено для тих, кому є різниця у чому ходити. Для тих, у
                    кого його стиль - це його вайб.
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Footer;
