import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './About';
import Footer from './Footer';
import BookingPage from './BookingPage';

function App() {
  return (
    <Router>
      <div className='app'>
          <Header className='header' />
          <Routes>
            <Route path="/" element={<main className='main'>
              <CallToAction />
              <Specials />
              <CustomersSay />
              <About />
            </main>
          } />
            <Route path="/bookings" element={<BookingPage />} />
          </Routes>
          <Footer className='footer' />
      </div>
     </Router>
  );
}

export default App;
