import { useEffect } from "react";
import { fetchCollections } from "../../store/slices/collections.slice";
import { useAppDispatch } from "../../hooks";
import { Link, useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxtypes";
import { useLocation } from "react-router";
import TestBanner from "../../assets/img/tshirtbanner.jpg";

const CollectionPage = () => {
    const { collectionName } = useParams();

    const dispatch = useAppDispatch();
    const location = useLocation();

    const { collections } = useSelector(
        (state: RootState) => state.collections
    );

    const collection = collections.find(
        (collection) => collection.path === `${collectionName}`
    );

    useEffect(() => {
        dispatch(fetchCollections());
    }, []);

    if (!collection) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Коллекцію не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <h3 className="mt-[30px] text-2xl uppercase font-bold">
                Доступні категорії:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[20px] mt-[30px]">
                {collection.categories.map((category, i) => (
                    <li key={i}>
                        <Link
                            to={`${location.pathname}/${category.path}`}
                            className="relative block"
                        >
                            <div className="absolute top-0 left-0 bg-black text-white px-[25px] py-[15px] text-lg z-10">
                                {category.name}
                            </div>
                            <img
                                src={TestBanner}
                                alt={category.name}
                                className="w-full h-auto"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CollectionPage;
