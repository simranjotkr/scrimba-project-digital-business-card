import './App.css';
import ProfilePicture from './Components/ProfilePicture';
import Title from './Components/Title';
import ContactButton from './Components/ContactButton';
import About from './Components/About';
import Interests from './Components/Interests'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app">
      <ProfilePicture />
      <Title />
      <ContactButton />
      <About />
      <Interests />
      <Footer />
    </div>
  );
}

export default App;
