import heVideo from "../assets/video/he.mp4";
import sheVideo from "../assets/video/she.mp4";
import kidsVideo from "../assets/video/kids.mp4";
import homeVideo from "../assets/video/home.mp4";
import { Link } from "react-router";

const ChooseCategory = () => {
    const categories = [
        {
            name: "Вона",
            video: sheVideo,
            path: "she",
        },
        {
            name: "Він",
            video: heVideo,
            path: "he",
        },
        {
            name: "Діти",
            video: kidsVideo,
            path: "kids",
        },
        {
            name: "Дім",
            video: homeVideo,
            path: "home",
        },
    ];

    return (
        <div>
            <h3 className="text-center p-[30px] text-3xl">
                Виберіть категорію:
            </h3>
            <div className="flex flex-wrap gap-[3px] items-center justify-center">
                {categories.map((category, i) => {
                    return (
                        <Link
                            to={category.path}
                            key={i}
                            className="w-[49%] relative"
                        >
                            <h2 className="absolute px-[40px] py-[20px] bg-gray-100 text-xl">
                                {category.name}
                            </h2>
                            <video
                                className="w-full h-[600px] object-cover object-[0%_30%]"
                                src={category.video}
                                autoPlay
                                muted
                                loop
                            />
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default ChooseCategory;
