import './App.css';
import Navbar from './My Components/navbar';
import Landing from './My Components/landing_ui';
import Cards from './My Components/Cards';
import BottomCards from './My Components/bottomCards';
import NewsLetter from './My Components/newsLetter';
import Footer from './My Components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <>
      <Navbar />
      <Landing />
      <Cards />
      <BottomCards />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
