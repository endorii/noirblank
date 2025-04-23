import { Outlet, useNavigate } from "react-router";
import Header from "./components/Header";
import { useEffect } from "react";

function App() {
    const currentCategory = localStorage.getItem("currentCategory");
    const navigate = useNavigate();

    useEffect(() => {
        if (!currentCategory) {
            navigate("/c");
        } else {
            navigate(currentCategory);
        }
    }, []);

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default App;
