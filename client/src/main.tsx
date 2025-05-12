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
import { Provider } from "react-redux";
import store from "./store/store";
import Cart from "./pages/Cart/Cart";
import Likes from "./pages/Likes/Likes";
import Account from "./pages/Account/Account";
import CollectionPage from "./pages/CollectionPage/CollectionPage";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import ProductPage from "./components/ProductPage/ProductPage";
import Login from "./components/Login/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path=":collectionName" element={<CollectionPage />} />
                <Route
                    path=":collectionName/:categoryName"
                    element={<CategoryPage />}
                />
                <Route
                    path=":collectionName/:categoryName/:productName"
                    element={<ProductPage />}
                />
                <Route path="cart" element={<Cart />} />
                <Route path="likes" element={<Likes />} />
                <Route path="account" element={<Account />} />
                <Route path="login" element={<Login />} />
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
