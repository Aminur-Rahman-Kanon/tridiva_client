import { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextApi from './Components/ContextApi/contextApi';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import ProductPage from './Pages/Products/Development/development';
import Pricing from './Pages/Pricing/pricing';
const Contact = lazy(() => import('./Pages/Contact/contact'));

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
            <Route path='/service/:serviceId' element={<ProductPage />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Suspense fallback={<p>Loadding</p>}>
              <Contact />
            </Suspense>}/>
          </Routes>
          <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;
