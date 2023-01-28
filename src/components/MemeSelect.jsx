import '../stylesheets/MemeSelect.css'

function MemeSelect({selecetImg}) {
    const handleChange = e => {
        selecetImg(e.target.value);
    }

    return(
        <select className="select-meme" onChange={handleChange}>
            <option value="select-meme">Selecciona un Meme</option>
            <option value="fire">Me gusta ver el mundo arder</option>
            <option value="futurama">Fry de Futurama</option>
            <option value="history">Alienígenas Ancestrales</option>
            <option value="matrix">Morfeo de Matrix</option>
            <option value="philosoraptor">Philosoraptor</option>
            <option value="smart">Trucos para la vida</option>
        </select>
    );
}

export default MemeSelect;