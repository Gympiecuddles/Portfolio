import { useState, useEffect} from 'react'

import Desktop from './pages/Desktop.jsx'
import NotDesktop from './pages/NotDesktop.jsx';

export default function App() {
   //Display mobile notification site if screen is too small
   const [screenWidth, setScreenWidth] = useState(window.innerWidth > 1364);

   useEffect(() => {
    const screenWidthChecker = () => {setScreenWidth(window.innerWidth > 1364)};

    window.addEventListener("resize", screenWidthChecker);

    return () => window.removeEventListener("resize", screenWidthChecker);
   }, []);

  return (
    <>
     {screenWidth ? <Desktop /> : <NotDesktop />}
    </>
  )
}
