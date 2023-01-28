import MemeLines from './components/MemeLines';
import {useState} from 'react';
import MemeContainer from "./components/MemeContainer";
import MemeSelect from "./components/MemeSelect";
import './App.css';

function App() {
  const [memeImg, setImage] = useState('select-meme');
  const [memeLineTop, setMemeLineTop] = useState('');
  const [memeLineBottom, setMemeLineBottom] = useState('');

  return (
    <div className="App">
      <MemeSelect selecetImg={setImage} />
      <MemeLines onChangeLineTop={setMemeLineTop} onChangeLineBottom={setMemeLineBottom} isEmptyImg={memeImg} />
      <MemeContainer memeLineTop={memeLineTop} memeLineBottom={memeLineBottom} memeImg={memeImg} />
    </div>
  );
}

export default App;
