import './App.css';
import Navbar from './Components/navbar'
import Home from './Components/home';
import SignIn from './Components/signIn';
import NewForecast from './Components/newForecast';
import EditForecast from './Components/editForecast';
import Jupyter from './Components/jupyter'
import{BrowserRouter as Router, Routes,Route} from "react-router-dom"

function App() {
  return (
    // <Router>
    //   <div className="App">
    //   <Navbar>
    //   <Routes>
    //     <Route path='/home' element={<Home/>}></Route>
    //     <Route path='/signIn' element={<SignIn/>}></Route>
    //     <Route path='/newForecast' element={<NewForecast/>}></Route>
    //     <Route path='/editForecast' element={<EditForecast/>}></Route>
    //     <Route path='/JupyterNotebook' element={<Jupyter/>}></Route>
    //   </Routes>
    //   </Navbar>
      
    //   </div>
    // </Router>
    <Router>
      <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/signIn' element={<SignIn/>}></Route>
        <Route path='/newForecast' element={<NewForecast/>}></Route>
        <Route path='/editForecast' element={<EditForecast/>}></Route>
        <Route path='/JupyterNotebook' element={<Jupyter/>}></Route>
      </Routes>
      
      </div>
    </Router>
    
  );
}

export default App;
