import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import OurDoctor from './Components/OurDoctor/OurDoctor';
import NavBar from './Components/NavBar/NavBar';
import UpperNav from './Components/UpperNav/UpperNav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <UpperNav></UpperNav>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/our-doctor' element={<OurDoctor></OurDoctor>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
