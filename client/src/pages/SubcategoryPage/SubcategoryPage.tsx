import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxtypes";
import { fetchCollections } from "../../store/slices/collections.slice";

const SubcategoryPage = () => {
    const { collectionName, categoryName, subcategoryName } = useParams();

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

    const subcategory = category?.subcategories.find(
        (subcategory) => subcategory.path === subcategoryName
    );

    console.log(category);

    useEffect(() => {
        dispatch(fetchCollections());
    }, []);

    if (!subcategory) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Підкатегорію не знайдено :(
            </div>
        );
    }

    return (
        <div>
            <h2>{subcategory?.name}</h2>
            <ul>
                {subcategory && subcategory.products.length > 0 ? (
                    <ul>
                        {subcategory?.products.map((product, i) => (
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

export default SubcategoryPage;
