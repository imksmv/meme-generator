import React from "react";
import "./Meme.css";
import memesData from "../memesData";

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);

    const getMemeImage = () => {
        const memesArray = allMemeImages.data.memes;
        const rng = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[rng].url;
        setMeme((prevImage) => ({
            ...prevImage,
            randomImage: url,
        }));
    };

    return (
        <main className="main">
            <div className="main__inner">
                <div className="form">
                    <input
                        className="form__input"
                        placeholder="Top text"
                        type="input"
                    />
                    <input
                        className="form__input"
                        placeholder="Bottom text"
                        type="input"
                    />
                    <button className="form__button" onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </div>
                {meme.randomImage && (
                    <img
                        className="main__image"
                        src={meme.randomImage}
                        alt="Meme"
                    />
                )}
            </div>
        </main>
    );
};

export default Meme;
