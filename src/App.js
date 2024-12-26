
import './App.css';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
import Slidder from './Components/Slidder';
import ProductSlidder from './Components/ProductSlidder';
import Earings from './Components/Earings';
import EaringsSlidder from './Components/EaringsSlidder';
import Banner from './Components/Banner';
import Banner2 from './Components/Banner2';
import Banner3 from './Components/Banner3';
import Products from './Components/Testimonials';
import Testimonials from './Components/Testimonials';
import Footer from './Components/Footer';
import ImageSlidder from './Components/ImageSlidder';

function App() {
  return (
    <div className='App'>

      <Navbar />
      <Slidder />
      <ProductSlidder />
       <Earings />
      <EaringsSlidder /> 
       <Banner />
       <Banner2 />
       <Banner3 />
       <ImageSlidder />
       <Testimonials />
       <Footer />
    </div>
   
  );
}

export default App;
