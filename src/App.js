import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarCustom from './components/Navbar';
import All from './components/All';
import Top from './components/Top';
import Trending from './components/Trending';
import Science from './components/Science';
import Entertainment from './components/Entertainment';
import Sports from './components/Sports';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarCustom />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/top' element={<Top />} />
          <Route path='/trending' element={<Trending />} />
          <Route path='/science' element={<Science />} />
          <Route path='/entertainment' element={<Entertainment />} />
          <Route path='/sports' element={<Sports />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
