import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Contact from './components/Contact';
import Testimonial from './components/Testimonial';
import Services from './components/Services';
import AboutWenlin from './components/AboutWenlin';
import AboutRobert from './components/AboutRobert';
import AboutAshley from './components/AboutAshley';
import AboutCarter from './components/AboutCarter';
import Tutorialpage from './components/TutorialPage';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Tutorialpage />
            <Testimonial />
            <AboutWenlin />
            <AboutRobert />
            <AboutAshley />
            <AboutCarter />
            
        </div>
    );
};

export default App;
