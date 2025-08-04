
import './App.css';
import Header from './Header';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <div className='app'>
         <Header className='header' />
         <main className='main'>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <About />
         </main>
         <Footer className='footer' />
     </div>
  );
}

export default App;
