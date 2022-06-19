import React from 'react'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w780/";
const cast__img = {

    objectFit: 'cover'
};
export const Cast = ({ cast }) => {
    return (
        <div className="col">
            <img
                src={BASE_IMG_URL + cast?.profile_path}
                alt={cast.name}
                className="rounded-circle w-75 h-75 obje"
                style={cast__img}
            />
        </div>
    )
}
