import React from 'react'

const Anime = ({ id, synopsis, titleEn, titleJp, image }) => (
    <div className="anime-section">
        <img className="anime-s-img" src={image} alt={titleEn} />

        <div className="anime-content">
            <h3 className="title">{titleEn}</h3>
            <h3 className="title">{titleJp}</h3>
        </div>

    </div>

)

export default Anime;