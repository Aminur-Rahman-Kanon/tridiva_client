import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextApi from './Components/ContextApi/contextApi';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';

function App() {

    const [sidedrawer, setSidedrawer] = useState(false);

    const toggleSidedrawer = () => {
      setSidedrawer((sidedrawer) => !sidedrawer);
    }

    console.log(sidedrawer);

    return (
      <div className="App">
        <ContextApi.Provider value={{sidedrawer, toggleSidedrawer}}>
          <Topbar />
          <Sidedrawer sidedrawer={sidedrawer} />
          <Routes>
            <Route path='/' element={<Homepage />}/>
          </Routes>
          <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;
