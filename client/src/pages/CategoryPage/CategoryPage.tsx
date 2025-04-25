import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxtypes";
import { fetchCollections } from "../../store/slices/collections.slice";

const CategoryPage = () => {
    const { collectionName, categoryName } = useParams();

    const dispatch = useAppDispatch();

    const { collections } = useSelector(
        (state: RootState) => state.collections
    );

    const collection = collections.find(
        (collection) => collection.path === `c/${collectionName}`
    );

    const category = collection?.categories.find(
        (category) => category.path === categoryName
    );

    console.log(category);

    useEffect(() => {
        dispatch(fetchCollections());
    }, []);

    if (!category) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Підкатегорію не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <h2>{category?.name}</h2>
            <ul>
                {category.subcategories && category.subcategories.length > 0 ? (
                    <ul>
                        {category.subcategories.map((product, i) => (
                            <li key={i}>{product.name}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Продукти не знайдені для цієї підкатегорії.</p>
                )}
            </ul>
        </div>
    );
};

export default CategoryPage;
