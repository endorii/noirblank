import heVideo from "../../assets/video/he.mp4";
import sheVideo from "../../assets/video/she.mp4";
import kidsVideo from "../../assets/video/kids.mp4";
import homeVideo from "../../assets/video/home.mp4";

const ChooseCategory = () => {
    return (
        <div>
            <h3 className="text-center p-[30px] text-3xl">
                Виберіть категорію:
            </h3>
            <div className="flex flex-wrap gap-[3px] items-center justify-center">
                <div className="w-[49%] relative">
                    <h2 className="absolute px-[40px] py-[20px] bg-gray-100 text-xl">
                        Вона
                    </h2>
                    <video
                        className="w-full h-[600px] object-cover object-[0%_30%]"
                        src={sheVideo}
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <div className="w-[49%] relative">
                    <h2 className="absolute px-[40px] py-[20px] bg-gray-100 text-xl">
                        Він
                    </h2>
                    <video
                        className="w-full h-[600px] object-cover object-[0%_40%]"
                        src={heVideo}
                        autoPlay
                        muted
                        loop
                    />
                </div>

                <div className="w-[49%] relative">
                    <h2 className="absolute px-[40px] py-[20px] bg-gray-100 text-xl">
                        Діти
                    </h2>
                    <video
                        className="w-full h-[600px] object-cover object-[0%_30%]"
                        src={kidsVideo}
                        autoPlay
                        muted
                        loop
                    />
                </div>
                <div className="w-[49%] relative">
                    <h2 className="absolute px-[40px] py-[20px] bg-gray-100 text-xl">
                        Дім
                    </h2>
                    <video
                        className="w-full h-[600px] object-cover object-[0%_30%]"
                        src={homeVideo}
                        autoPlay
                        muted
                        loop
                    />
                </div>
            </div>
        </div>
    );
};

export default ChooseCategory;
