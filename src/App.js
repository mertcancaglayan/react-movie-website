import { Route, Routes } from "react-router-dom";
import { Fragment } from "react";
import Header from "./components/Header";
import Home from "./components/pages/home";
import Movies from "./components/pages/movies";
import Tvshows from "./components/pages/tvshows";
import Favorites from "./components/pages/favorites";
import Searched from "./components/pages/searched";
import "./App.css"

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/tvshows" element={<Tvshows />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/search" element={<Searched />} />
            </Routes>
        </Fragment>
    );
}

export default App;
