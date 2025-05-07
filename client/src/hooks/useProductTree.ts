import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useProductTree = () => {
    const { collectionName, categoryName, productName } = useParams();

    const { collections } = useSelector((state: RootState) => state.collections);

    const collection = collections.find((col) => col.path === collectionName);

    const category = collection?.categories.find((cat) => cat.path === categoryName);

    const product = category?.products.find((prod) => prod.path === productName);

    return { collection, category, product };
};
