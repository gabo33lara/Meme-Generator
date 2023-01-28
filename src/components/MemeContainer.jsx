import '../stylesheets/MemeContainer.css';

function MemeContainer({memeLineTop, memeLineBottom, memeImg}) {
    return(
        <div className="meme-container">
            <p className={memeImg === 'select-meme' ? 'line-top none' : 'line-top'.trimEnd() }>{memeLineTop}</p>
            <p className={memeImg === 'select-meme' ? 'line-bottom none' : 'line-bottom'.trimEnd() }>{memeLineBottom}</p>
            <img src={`/img/${memeImg}.jpg`} alt="Selected meme" className={memeImg === 'select-meme' ? 'none' : '' } />
            <h3 className={memeImg !== 'select-meme' ? 'none' : '' }>Qué mirás bobo?<br /><span>Selecciona un meme bobo!</span></h3>
        </div>
    );
}

export default MemeContainer;