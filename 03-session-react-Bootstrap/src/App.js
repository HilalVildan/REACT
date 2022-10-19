import CourseCard from './components/CourseCard';
import data from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <MyNavbar/>
    <CourseCard dataa={data}/>
    <Footer/>
    
    </div>
  );
}

export default App;
