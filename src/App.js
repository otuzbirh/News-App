import s from './App.css';
import Navigation from './components/Navigation.js'
import AnimatedSection from './components/animations/animatedSection';
import Home from './pages/Home'
import { NewsContextProvider } from './NewsContext'
import {Routes, Route} from 'react-router-dom'
import Article from './components/Article'
import { Scrollbars } from "rc-scrollbars"
import {BottomNavigation, Typography} from '@mui/material';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  return (
   <>
    
   <NewsContextProvider>
   <Navigation />
   <AnimatedSection>
  
      <Scrollbars
      style={{  height: "75vh" }}
      classes={{
        root: s.scrollbarRoot,
        view: s.scrollbarView, }}
      >
          <Routes>
    <Route  path='/' exact element={  <Home /> } />
    <Route path="/article/:id" exact element={ <Article />} />
    </Routes>
    </Scrollbars>
   </AnimatedSection>
    <BottomNavigation
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
     <Typography component="h1"> Crafted with {<FavoriteIcon/>} by Hadžo</Typography>
  
    </BottomNavigation>
   </NewsContextProvider>
   
   </>  
  );
}

export default App;
