import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks";
import { fetchCollections } from "../store/slices/collections.slice";

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchCollections());
    }, []);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
