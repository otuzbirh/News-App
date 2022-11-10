import './App.css';
import Navigation from './components/Navigation.js'
import AnimatedSection from './components/animations/animatedSection';
import Home from './pages/Home'
import { NewsContextProvider } from './NewsContext'
import {Routes, Route} from 'react-router-dom'
import Article from './components/Article'

function App() {
  return (
   <>
    
   <NewsContextProvider>
   <Navigation />
   <AnimatedSection>
    <Routes>
    <Route  path='/' exact element={  <Home /> } />
    <Route path="/article/:id" exact element={ <Article />} />
    </Routes>

   </AnimatedSection>
   </NewsContextProvider>
   
   </>  
  );
}

export default App;
