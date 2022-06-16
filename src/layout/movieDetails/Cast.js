import React from 'react'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
const cast__img = {
    height: "40px",
    width: "40px",
};
export const Cast = ({ cast }) => {
    return (
        <div className="col">
            <img
                src={BASE_IMG_URL + cast?.profile_path}
                alt={cast.name}
                className="rounded-circle"
                style={cast__img}
            />
        </div>
    )
}
