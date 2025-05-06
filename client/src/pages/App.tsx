import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchCollections } from "../store/slices/collections.slice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "../components/Header/Header";
import ChooseCategoryHeader from "../components/ChooseCategoryHeader/ChooseCategoryHeader";
import { ICollection } from "../types/dbtypes";
import { Link, Outlet, useLocation } from "react-router";
import Container from "../components/Container/Container";
import Footer from "../components/Footer/Footer";

function App() {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const [currentCollection, setCurrentCollection] =
        useState<ICollection | null>(null);

    const collections = useSelector(
        (state: RootState) => state.collections.collections
    );

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

    const isHomePage = location.pathname === "/";

    return (
        <>
            <div className="absolute top-0 left-0 w-full">
                <Header />
                <ChooseCategoryHeader
                    currentCollection={currentCollection}
                    setCurrentCollection={setCurrentCollection}
                />
            </div>

            <Container>
                {isHomePage ? (
                    <div className="collections-list">
                        <h3 className="mt-[30px] text-2xl uppercase font-bold">
                            Колекції
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-[30px]">
                            {collections.map((collection, i) => (
                                <li key={i}>
                                    <Link
                                        to={collection.path}
                                        className="relative group"
                                    >
                                        <div className="absolute top-0 left-0 bg-black text-white px-[25px] py-[15px] text-lg z-10 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                            {collection.name}
                                        </div>
                                        <img
                                            src={collection.banner}
                                            alt={collection.name}
                                            className="w-full h-[100vh] object-cover filter transition-all duration-300"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <Outlet />
                )}
            </Container>
            <Footer />
        </>
    );
}

export default App;
