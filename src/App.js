import WebFont from 'webfontloader';
import { useEffect } from 'react'

import CharacterList from './components/CharacterList';


function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['League Spartan',]
      }
    });
  }, []);
  return (
    <main className="container">
      <CharacterList />
    </main>
  );
}

export default App;
