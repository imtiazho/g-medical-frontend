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
import AllPortfolio from './Components/AllPortfolio/AllPortfolio';
import Education from './Components/Education/Education';
import Research from './Components/Research/Research';
import Violenece from './Components/Violenece/Violenece';
import Contact from './Components/Contact/Contact';
import HomePageServiceDetails from './Components/HomePageServiceDetails/HomePageServiceDetails';
import DoctorProfile from './Components/DoctorProfile/DoctorProfile';
import ServiceDetailsPage from './Components/ServiceDetailsPage/ServiceDetailsPage';
import BolgDetailsPage from './Components/BolgDetailsPage/BolgDetailsPage';

function App() {
  return (
    <div>
      <UpperNav></UpperNav>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/ser-details/:serDetails' element={<HomePageServiceDetails></HomePageServiceDetails>}></Route>
        <Route path='/our-doctor' element={<OurDoctor></OurDoctor>}></Route>
        <Route path='/doctor-profile/:doctorId' element={<DoctorProfile></DoctorProfile>}></Route>
        <Route path='/about-sec' element={<About></About>}></Route>
        <Route path='/service-sec' element={<Service></Service>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetailsPage />}></Route>
        <Route path='/blog-sec' element={<Blog></Blog>}></Route>
        <Route path='/portfolio-sec' element={<Portfolio></Portfolio>}>
          <Route index element={<AllPortfolio />}></Route>
          <Route path='edu-portfolio' element={<Education />}></Route>
          <Route path='research-portfolio' element={<Research />}></Route>
          <Route path='violence-portfolio' element={<Violenece />}></Route>
        </Route>
        <Route path='/contact-sec' element={<Contact></Contact>}></Route>
        <Route path='/blog-deta' element={<BolgDetailsPage></BolgDetailsPage>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
