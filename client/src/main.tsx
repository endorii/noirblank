import { createRoot } from "react-dom/client";
import "./index.css";
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router";
import { StrictMode } from "react";
import App from "./pages/App";
import ManCategory from "./pages/he/ManCategory";
import ChooseCategory from "./pages/components/ChooseCategory";
import HomeCategory from "./pages/home/HomeCategory";
import KidsCategory from "./pages/kids/KidsCategory";
import WomanCategory from "./pages/she/WomanCategory";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path="c" element={<ChooseCategory />} />
                <Route path="c/he" element={<ManCategory />} />
                <Route path="c/she" element={<WomanCategory />} />
                <Route path="c/kids" element={<KidsCategory />} />
                <Route path="c/home" element={<HomeCategory />} />
            </Route>
        </>
    )
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        {/* <Provider store={store}> */}
        <RouterProvider router={router} />
        {/* </Provider> */}
    </StrictMode>
);
