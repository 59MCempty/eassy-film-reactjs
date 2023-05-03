import React from 'react';
import FilmCard from "./FilmCard";

const FilmList = ({ recommend, ClickItem }) => {
            // {/*<FilmCard film={currentFilms} onClick={(film) => console.log("Cliked", film)}  />*/}

    return (
        <div>
            <h1 className="text-2xl font-thin">Recommendations For You</h1>
            <div style={{ width: "100vh - 25px"}}
                 className="flex gap-4 mt-3 overflow-x-auto">
                {
                    recommend.map((item) =>{
                        return (
                            <>
                                <span className="mb-3" key={item.id}>
                                    <FilmCard film={item} onClick={ClickItem} />
                                </span>
                            </>
                            )
                    })
                }
            </div>
        </div>
    );
};

export default FilmList;
