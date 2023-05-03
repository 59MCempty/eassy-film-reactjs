import React from 'react';

const style = {
    title: "absolute mt-[-40px] h-10 w-[300px] rounded-b-lg pl-5 pt-2 bg-black opacity-80"
}
const FilmCard = ({film, onClick}) => {

    const ClickEvent = () => {
        onClick(film)
        console.log(film)
    }
    return (
        <>
            <div onClick={ClickEvent} className="w-[300px] cursor-pointer relative">
                <img alt={film.name} className="rounded-lg" src={`https://image.tmdb.org/t/p/w300${film.backdrop_path}`} />
                <div className={style.title}>{film.name.length > 20 ? film.name.slice(0, 20) + " ..." : film.name}</div>
            </div>

        </>
    );
};

export default FilmCard;
