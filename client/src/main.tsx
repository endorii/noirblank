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
import ChooseCategory from "./pages/components/ChooseCategory";
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/cart/Cart";
import Likes from "./pages/likes/Likes";
import Account from "./pages/account/Account";
import SubcategoryPage from "./pages/CategoryPage/CategoryPage";
import CollectionPage from "./pages/CollectionPage/CollectionPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path="c" element={<ChooseCategory />} />
                <Route path="c/:collectionName" element={<CollectionPage />} />
                <Route
                    path="c/:collectionName/:categoryName"
                    element={<SubcategoryPage />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="likes" element={<Likes />} />
                <Route path="account" element={<Account />} />
            </Route>
        </>
    )
);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </StrictMode>
);
