import CourseCard from './components/CourseCard';
import data from './data'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';


function App() {
  return (
    <div>
    <MyNavbar/>
    <CourseCard dataa={data}/>
    
    </div>
  );
}

export default App;
