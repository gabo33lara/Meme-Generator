import html2canvas from 'html2canvas';
import '../stylesheets/MemeLines.css';

function MemeLines({onChangeLineTop, onChangeLineBottom, isEmptyImg}) {
    const handleMemeLineTop = e => {
        if(isEmptyImg !== 'select-meme') {
            onChangeLineTop(e.target.value);
        }
    }

    const handleMemeLineBottom = e => {
        onChangeLineBottom(e.target.value);
    }

    const exportMeme = () => {
        if(isEmptyImg === 'select-meme') {
            return;
        }
        html2canvas(document.querySelector('.meme-container')).then(function(canvas) {
            // document.body.appendChild(canvas);
            const img = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.download = 'meme.png';
            link.href = img;
            link.click();
        });
    }

    return(
        <div className="meme-lines-container">
            <input type="text" onChange={handleMemeLineTop} placeholder="Texto superior..." className={isEmptyImg === 'select-meme' ? 'pointer-none' : ''} /><br />
            <input type="text" onChange={handleMemeLineBottom} placeholder="Texto inferior..." className={isEmptyImg === 'select-meme' ? 'pointer-none' : ''} /><br />
            <button onClick={exportMeme}>Descargar</button>
        </div>
    );
}

export default MemeLines;