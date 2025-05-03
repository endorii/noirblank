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

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<App />}>
                <Route path=":collectionName" element={<CollectionPage />} />
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
