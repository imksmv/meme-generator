import React from "react";
import "./Meme.css";
import memesData from "../memesData";

const Meme = () => {
    const getMemeImage = () => {
        const memesArray = memesData.data.memes;
        const rng = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[rng].url;
        console.log(url);
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
            </div>
        </main>
    );
};

export default Meme;
