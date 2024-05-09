import { Route, Routes } from 'react-router-dom';
import './App.css';
import Topbar from './Components/Topbar/topbar';
import Homepage from './Pages/Homepage/homepage';
import Footer from './Components/Footer/footer';

function App() {
    return (
      <div className="App">
        <Topbar />
        <Routes>
          <Route path='/' element={<Homepage />}/>
        </Routes>
        <Footer />
      </div>
    );
}

export default App;
