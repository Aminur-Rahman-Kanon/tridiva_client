import { useState, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import ContextApi from './Components/ContextApi/contextApi';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';
import Sidedrawer from './Components/Sidedrawer/sidedrawer';
import Spinner from './Components/Spinner/spinner';
const ProductPage = lazy(() => import('./Pages/Products/Development/development'));
const Contact = lazy(() => import('./Pages/Contact/contact'));
const Pricing = lazy(() => import('./Pages/Pricing/pricing'));

function App() {

    const [sidedrawer, setSidedrawer] = useState(false);

    const toggleSidedrawer = () => {
      setSidedrawer((sidedrawer) => !sidedrawer);
    }

    return (
      <div className="App">
        <ContextApi.Provider value={{sidedrawer, toggleSidedrawer}}>
          <Topbar />
          <Sidedrawer sidedrawer={sidedrawer} />
          <Routes>
            <Route path='/' element={<Homepage />}/>
            <Route path='/service/:serviceId' element={<Suspense fallback={<Spinner load={true} />}>
              <ProductPage />
            </Suspense>} />
            <Route path='/pricing' element={<Suspense fallback={<Spinner load={true} />}>
              <Pricing />
            </Suspense>} />
            <Route path='/contact' element={<Suspense fallback={<Spinner load={true} />}>
              <Contact />
            </Suspense>}/>
            <Route path='/contact/:queryId' element={<Suspense fallback={<Spinner load={true}/>}>
              <Contact />
            </Suspense>}/>
          </Routes>
          <Footer />
        </ContextApi.Provider>
      </div>
    );
}

export default App;
