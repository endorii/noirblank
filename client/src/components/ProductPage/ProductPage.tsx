import { useProductTree } from "../../hooks/useProductTree";

const ProductPage = () => {
    const { collection, category, product } = useProductTree();

    if (!collection || !category || !product) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Товар не знайдено :(
            </div>
        );
    }

    return (
        <div className="flex mt-[30px] gap-[70px] items-center">
            <div className="flex gap-[10px]">
                <img src={product.images[0]} alt="" className="max-w-[700px]" />
                <ul className="flex flex-col w-[150px] gap-[10px] overflow-y-scroll max-h-[700px]">
                    {product.images.map((image, i) => {
                        return (
                            <li key={i}>
                                <img
                                    src={image}
                                    alt=""
                                    className="max-w-full h-auto"
                                />
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="flex flex-col gap-[10px] w-full">
                <div className="flex justify-between">
                    <h3 className="text-2xl">{product.name}</h3>
                    <div className="text-3xl font-semibold mr-[30%]">
                        {product.price}$
                    </div>
                </div>
                <div className="text-sm text-gray-500">
                    {collection.name} / {category.name}
                </div>
                <div className="mt-[30px]">{product.description}</div>
                <hr className="w-[95%] m-[0_auto] border-gray-200" />
                <div className="">{product.composition}</div>
                <div
                    className={`text-sm ${
                        product.available ? "text-green-600" : "text-gray-500"
                    }`}
                >
                    {product.available ? "В наявності" : "Немає в наявності"}
                </div>

                <div className="mt-[100px] flex flex-col gap-[20px]">
                    <div className="flex flex-col gap-[10px]">
                        <div>Тип:</div>
                        <ul className="flex gap-[10px]">
                            {product.type.map((t, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="px-[20px] py-[10px] border border-gray-200 hover:border-black cursor-pointer"
                                    >
                                        {t}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div>Колір:</div>
                        <ul className="flex gap-[10px]">
                            {product.color.map((c, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="px-[20px] py-[10px] border border-gray-200 hover:border-black cursor-pointer"
                                    >
                                        {c}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-[10px]">
                        <div>Розмір:</div>
                        <ul className="flex gap-[10px]">
                            {product.sizes.map((s, i) => {
                                return (
                                    <li
                                        key={i}
                                        className="px-[20px] py-[10px] border border-gray-200 hover:border-black cursor-pointer"
                                    >
                                        {s}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="flex justify-between gap-[10px]">
                        <button
                            disabled={!product.available}
                            className="w-full border border-transparent hover:text-black hover:border-black hover:bg-white bg-black text-white px-[20px] py-[15px] mt-[30px] transition-all duration-300 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 disabled:cursor-not-allowed"
                        >
                            Купити
                        </button>
                        <button
                            disabled={!product.available}
                            className="w-full border border-transparent hover:text-black hover:border-black hover:bg-white bg-black text-white px-[20px] py-[15px] mt-[30px] transition-all duration-300 cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:border-0 disabled:cursor-not-allowed"
                        >
                            В кошик
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
