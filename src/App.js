
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Footer from "./components/Footer/Footer"
import Contact from './pages/Contact/Contact';
import Faqs from './pages/FAQS/Faqs';
import Privacypolicy from './pages/PrivacyPolicy/Privacypolicy';
import Termsandconditions from "./pages/TermsAndConditions/Termsandconditions"
import News from './pages/News/News';
function App() {
  return (
    <div className="App">
      <Header/>
    <Routes>
      <Route path='/' exact element={<Home/>} />
      <Route path="/contact" exact element={<Contact/>}/>
      <Route path="/faqs" exact element={<Faqs/>}/>
      <Route path='/terms' exact element={<Privacypolicy/>}/>
      <Route path='/privacy' exact element={<Termsandconditions/>}/>
      <Route path='/news' exact element={<News/>}/>
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
