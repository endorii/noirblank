import { useEffect } from "react";
import { fetchCollections } from "../../store/slices/collections.slice";
import { useAppDispatch } from "../../hooks";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxtypes";

const CollectionPage = () => {
    const { collectionName } = useParams();

    const dispatch = useAppDispatch();

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
                Категорію не знайдено :(
            </div>
        );
    }

    return (
        <div className="p-[30px]">
            <h2>{collection.name}</h2>
        </div>
    );
};

export default CollectionPage;
