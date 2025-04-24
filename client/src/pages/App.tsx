import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { fetchCategories } from "../store/slices/categories.slice";

function App() {
    const currentCategory = localStorage.getItem("currentCategory");
    const navigate = useNavigate();

    const dispatch = useAppDispatch();

    useEffect(() => {
        if (!currentCategory) {
            navigate("/c");
        } else {
            navigate(currentCategory);
        }
        dispatch(fetchCategories());
    }, []);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
