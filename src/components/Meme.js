import React from "react";
import "./Meme.css";

const Meme = () => {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "",
    });

    const [allMemes, setAllMemes] = React.useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((dataArray) => setAllMemes(dataArray.data.memes));
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name]: value,
        }));
    };

    const getMemeImage = () => {
        const rng = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[rng].url;
        setMeme((prevData) => ({
            ...prevData,
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
                        value={meme.topText}
                        onChange={handleChange}
                        name="topText"
                    />
                    <input
                        className="form__input"
                        placeholder="Bottom text"
                        type="input"
                        name="bottomText"
                        value={meme.bottomText}
                        onChange={handleChange}
                    />
                    <button className="form__button" onClick={getMemeImage}>
                        Get a new meme image 🖼
                    </button>
                </div>
                {meme.randomImage && (
                    <div className="meme">
                        <img
                            src={meme.randomImage}
                            className="main__image"
                            alt="Meme"
                        />
                        <h2 className="meme__text top">{meme.topText}</h2>
                        <h2 className="meme__text bottom">{meme.bottomText}</h2>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Meme;
