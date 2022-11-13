import s from './App.css';
import Navigation from './components/Navigation.js'
import AnimatedSection from './components/animations/animatedSection';
import  { HomeContextProvider } from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Article from './components/Article'
import { Scrollbars } from "rc-scrollbars"
import {BottomNavigation, Typography} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';

function App() {
  return (
   <>
       <Navigation />
   <AnimatedSection>
  
      <Scrollbars
      style={{  height: "75vh" }}
      classes={{
        root: s.scrollbarRoot,
        view: s.scrollbarView, }}
      >
          <Routes>
    <Route  path='/' exact element={  <HomeContextProvider /> } />
    <Route path="/article/:id" exact element={ <HomeContextProvider> <Article /> </HomeContextProvider> } />
    </Routes>
    </Scrollbars>
   </AnimatedSection>
    <BottomNavigation
      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
    >
     <Typography component="h1"> Crafted with {<FavoriteIcon/>} by Hadžo</Typography>
  
    </BottomNavigation>
   
   </>  
  );
}

export default App;
