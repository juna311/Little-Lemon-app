
import './App.css';
import Header from './Header';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import About from './About';
import Footer from './Footer';

function App() {
  return (
    <>
         <Header />
         <main>
            <CallToAction />
            <Specials />
            <CustomersSay />
            <About />
         </main>
         <Footer />
     </>
  );
}

export default App;
