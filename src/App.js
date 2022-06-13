import Home from "./pages/Home";
import GlobalStyles from './components/GlobalStyles'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import GameDetail from './components/GameDetail'
function App() {
  return (
    
      <div className="App">
        <GlobalStyles/>
        <main>
          <Router>
            <Routes >
              <Route path="/" element={<Home/>}/>
              <Route path='/game/:id' element={<Home/>}/>
            </Routes>
          </Router>
        </main>
      </div>
    
  );
}

export default App;
