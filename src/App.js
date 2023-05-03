import React, {useEffect, useState} from 'react';
import {filmApi} from "./utils/fetchApi";
import {BACKDROP_BASE_URL} from "./config";
import FilmsDetail from "./components/FilmsDetail";
import LogoTitle from "./components/LogoTitle";
import FilmList from "./components/FilmList";
import SearchBar from "./components/SearchBar";


const App = () => {

    const [currentFilms, setCurrentFilms] = useState();
    const [recommendationsFilm, setRecommendationsFilm] = useState();

    const dataFilms = async () => {
        const film = await filmApi.fetchApi()
        setCurrentFilms(film[0])
    }

    const dataRecommendationsFilm = async (tv_id) => {
        const recommend = await filmApi.fetchApiRecommendations(tv_id)
        if (recommend.length > 0) {
            setRecommendationsFilm(recommend)
        }
    }

    const dataSearchFilm = async (title) => {
        const responseSearch = await filmApi.fetchApiSearch(title)
        if (responseSearch.length > 0) {
            setCurrentFilms(responseSearch[0])
        }

        console.log(currentFilms)

    }

    // first components load return undefined
    // after that run again and call api return data film
    useEffect(() => {
        dataFilms()
    }, [])


    // to take list film and render that
    // run when user choose other film
    useEffect(() => {
        // to absolute currentFilms or data defined -- check
        if (currentFilms) {
            dataRecommendationsFilm(currentFilms.id)
        }

    }, [currentFilms])


    function updateCurrentFilm(film) {
        setCurrentFilms(film)
    }

    return (
        <div className="main_container"
        style={{ background: currentFilms ?
                `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
                 url("${BACKDROP_BASE_URL}${currentFilms.backdrop_path}") no-repeat center / cover`
                : "black" }}>
            <div className="header">
                    <div className="grid lg:grid-cols-3 md:grid-rows-1">
                        <div>
                            <LogoTitle />
                        </div>

                        <div>
                            <SearchBar onSubmit={dataSearchFilm} />
                        </div>
                    </div>

            </div>

            <div className="beeflixDetails">
                {/* if data defined then FilmsDetail tag will execute */}
                {currentFilms && <FilmsDetail film={currentFilms} />}
            </div>

            <div className="recommend_videos">
                {/* pass onClick event to FilmCard, FilmCard get event by another onClick event */}

                {recommendationsFilm && <FilmList ClickItem={updateCurrentFilm} recommend={recommendationsFilm} />}
            </div>
        </div>
    );
};

export default App;
