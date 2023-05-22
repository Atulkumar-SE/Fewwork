import { Route,BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from './Components/Home/Home';
import Reference from "./Components/Reference/Reference";
import Resume from "./Components/Resume/Resume";
import LatestJob from "./Components/LatestJob/LatestJob";
import Header from "./Components/BasicBody/Header/Header";
import SubHead from "./Components/BasicBody/SubHeader/SubHead";
import Footer from "./Components/BasicBody/Footer/Footer";

function App() {
  return (
    
      <Router>
        <Header/>
        <SubHead/>
          <Routes>
           <Route path="/" element={<Home/>} />
            <Route path="/Reference" element={<Reference/>}/>
            <Route path="/Resume" element={<Resume/>} />
            <Route path="/LatestJob" element={<LatestJob/>} />
          </Routes>
        <Footer/>
      </Router>
    
  );
}

export default App;
