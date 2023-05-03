import React from 'react';
import RateStars from "./RateStars";
import FilmCard from "./FilmCard";
const FilmsDetail = ({film}) => {


    return (
        <div className=" h-[200px] md:overflow-y-auto">
        {/* name */}
            <div className="mb-2 text-3xl">{film.name}</div>
        {/* rate */}
            <div>
                <RateStars rating={film.vote_average / 2} />
            </div>
        {/* overview */}
            <div className="mt-4 overflow-y-hidden w-4/5 font-bold text-thin">{film.overview}</div>
        </div>
    );
};

export default FilmsDetail;
