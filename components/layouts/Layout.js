import Header from './Header';
import themes from './themes';
import styled, {ThemeProvider, createGlobalStyles} from 'styled-components'
import {useState, createContext} from 'react';
const Layout = ({children}) => {
  const [theme, setTheme]= useState('light');

  const changeTheme =() =>{
       setTheme(theme == "light" ? "dark" : "light");
  }

  return (
    <ThemeProvider theme={themes[theme]}>
     <LayoutWrapper onClick={changeTheme}>
        <Header/>
        {children}
     </LayoutWrapper>
    </ThemeProvider>
  )
}

const LayoutWrapper =styled.div`
   background-color: ${(props) =>props.theme.bgcolor};
   background-image: ${(props) =>props.theme.bgImage};
   color: ${(props) => props.theme.color};

`
export default Layout