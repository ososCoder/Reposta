//REACT ROUTER
import { Routes, Route } from 'react-router-dom';

//CSS
import './App.css';

//COMPONENTS
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';

//APP
function App() {
  return (
    <div className='App'>
      <Header />
      <main className='App-main'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </main>
      <footer className='App-footer'>footer</footer>
    </div>
  );
}

export default App;
