import { Outlet } from "react-router";
import Header from "./components/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { fetchCategories } from "../store/slices/categories.slice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
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
