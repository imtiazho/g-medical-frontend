import './App.css';
import { Routes, Route } from "react-router-dom"
import Home from './Components/Home/Home';
import OurDoctor from './Components/OurDoctor/OurDoctor';
import NavBar from './Components/NavBar/NavBar';
import UpperNav from './Components/UpperNav/UpperNav';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Service from './Components/Service/Service';
import Blog from './Components/Blog/Blog';
import Portfolio from './Components/Portfolio/Portfolio';

function App() {
  return (
    <div>
      <UpperNav></UpperNav>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/our-doctor' element={<OurDoctor></OurDoctor>}></Route>
        <Route path='/about-sec' element={<About></About>}></Route>
        <Route path='/service-sec' element={<Service></Service>}></Route>
        <Route path='/blog-sec' element={<Blog></Blog>}></Route>
        <Route path='/portfolio-sec' element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
