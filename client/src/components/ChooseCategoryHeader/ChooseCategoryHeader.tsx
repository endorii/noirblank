import { useEffect } from "react";
import { fetchCollections } from "../../store/slices/collections.slice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Link } from "react-router";
import { ICollection } from "../../types/dbtypes";

interface ChooseCategoryHeaderProps {
    setCurrentCollection: (collection: ICollection) => void;
    currentCollection: ICollection | null;
}

const ChooseCategoryHeader = ({
    setCurrentCollection,
}: ChooseCategoryHeaderProps) => {
    const dispatch = useAppDispatch();

    const collections = useSelector(
        (state: RootState) => state.collections.collections
    );

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

    return (
        <div>
            <ul className="flex justify-between text-center">
                {collections.map((collection, i) => (
                    <li
                        key={i}
                        className="flex-1 border-r border-b border-t-0 border-gray-200 transition-all ease-in-out duration-200"
                    >
                        <Link
                            to={collection.path}
                            onClick={() => setCurrentCollection(collection)}
                            className="flex items-center justify-center w-full bg-white h-full p-[15px] hover:bg-black hover:text-white cursor-pointer"
                        >
                            {collection.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChooseCategoryHeader;
