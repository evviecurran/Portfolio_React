// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
// import logo from './logo.svg';
import './App.css';

// import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import {BrowserRouter as Routes, Route} from 'react-router-dom';

// if I do 1 period versus two the errors change-  happens with all of these imports  - took away the period as well and still adds smaller errors


// or can do brower route to route
function App() {
  return (
    <>
   
    <Routes>
    {/* <Navbar/> */}
      <Route exact path= "/" component={ Home } />
      <Route exact path="/about" component={ About } />
      <Route exact path="/service" component={ Services } />
      <Route exact path="/contact" component={ Contact } />
    </Routes>

    </>
  );
}

export default App;
