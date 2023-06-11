import { useState } from 'react'
import Catalog from '../../features/catalog/Catalog';
import { Container, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../features/home/Home';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/About';
import ContactPage from '../../features/contact/Contact';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import NotFound from '../errors/NotFound';






function App() {
  const[darkmode, setDarkMode]=useState(false);
  const paletteType = darkmode?'dark':'light';
const theme = createTheme({
  palette:{
    mode:paletteType,
    background:{
      default: paletteType==='light'?'#eaeaea':'#121212'
    }
  }
})
function handleThemeChange(){
  setDarkMode(!darkmode);
}
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer position='bottom-right'  />
    <CssBaseline/>
      <Header darkMode={darkmode} handleThemeChange={handleThemeChange} />
    <Container>
      <Routes>
     <Route path='/' Component={HomePage} />
     <Route path='/catalog' Component={Catalog} />
     <Route path='/catalog/:id' Component={ProductDetails} />
     <Route path='/about' Component={AboutPage} />
     <Route path='/contact' Component={ContactPage} />
     <Route path='*' Component={NotFound}/>
     </Routes>
  
     </Container>
    </ThemeProvider>
  )
}

export default App
