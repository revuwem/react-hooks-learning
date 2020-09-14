import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      <HookSwitcher />
    </div>
  );
}


const HookSwitcher = () => {

  const [color, setColor] = useState('green');
  const [fontSize, setFontSize] = useState(1.5);

  return (
    <div
      style={{
        padding: '10px',
        backgroundColor: color,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: `${fontSize}em`
      }}>      
      <button
        onClick={() => { setColor('green') }}>
        Green
      </button>
      <button
        onClick={() => { setColor('orange') }}>
        Orange
      </button>
      <button
        onClick={() => setFontSize((s)=>s+1)}>
        Increase font size
      </button>
      <button
        onClick={() => setFontSize((s)=>s-1)}>
        Derease font size
      </button>
      <p>Make React great again!</p>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);



