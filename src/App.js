import './App.css';
import { useState } from 'react';
import TabNavigator from './components/TabNavigator';

function App() {
  const [theme, setTheme] = useState('lightgrey')

  return (
    <div>
      <div className='header'>
        <h3>Theme:</h3>
        <div onClick={() => setTheme('lightgrey')} className='box2'> </div>
        <div onClick={() => setTheme('grey')} className='box1'> </div>
      </div>

    <TabNavigator theme={theme} />
    </div>
  );
}

export default App;
