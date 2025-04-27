import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks";
import { fetchCollections } from "../store/slices/collections.slice";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import Header from "../components/Header/Header";
import ChooseCategoryHeader from "../components/ChooseCategoryHeader/ChooseCategoryHeader";
import { ICollection } from "../types/dbtypes";
import { Outlet } from "react-router";
import Container from "../components/Container/Container";

function App() {
    const dispatch = useAppDispatch();
    const [currentCollection, setCurrentCollection] =
        useState<ICollection | null>(null);

    const collections = useSelector(
        (state: RootState) => state.collections.collections
    );

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

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
                {window.location.pathname === "/" ? (
                    <div className="collections-list mt-10 p-5">
                        <h2 className="text-2xl font-bold">Колекції</h2>
                        <ul className="">
                            {collections.map((collection, i) => (
                                <li key={i}>
                                    <h3>{collection.name}</h3>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <Outlet />
                )}
            </Container>
        </>
    );
}

export default App;
