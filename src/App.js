import WebFont from 'webfontloader';
import { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CharacterList from './views/CharacterList';
import Profile from './views/Profile';

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['League Spartan',]
      }
    });
  }, []);
  return (
    <div className='container'>
      <BrowserRouter>

        <Routes>
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/" element={<CharacterList />} />
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
