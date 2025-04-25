import { useEffect } from "react";
import { fetchCategories } from "../../store/slices/categories.slice";
import { useAppDispatch } from "../../hooks";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../types/reduxtypes";

const CategoryPage = () => {
    const { categoryName } = useParams();
    console.log(categoryName);

    const dispatch = useAppDispatch();

    const { categories } = useSelector((state: RootState) => state.categories);

    const category = categories.find(
        (category) => category.path === `c/${categoryName}`
    );

    useEffect(() => {
        dispatch(fetchCategories());
    }, []);

    if (!category) {
        return (
            <div className="pt-[130px] text-center text-[50px]">
                Категорію не знайдено :(
            </div>
        );
    }

    return <h2>{category.name}</h2>;
};

export default CategoryPage;
