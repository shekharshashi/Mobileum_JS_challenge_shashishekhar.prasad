import * as React from "react";
import {
  BrowserRouter, 
  Routes, 
  Route
} from "react-router-dom";

import { styled, ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalStyles";
import { lightTheme, darkTheme } from "./Theme";
import  {useDarkMode} from "./useDarkMode";
import Toggle from "./Toggler";

import Navbar from './Components/Navbar'
import ProductList from './Pages/ProductList';
import ProductTable from './Pages/ProductTable';
import NewProduct from './Pages/NewProduct';

const App = () =>{
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === 'light' ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeMode}>
          <>
            <GlobalStyles />
            <div className="App">
              <div className="text-center">
                <Navbar />
                <BrowserRouter>
                  <Routes>
                    <Route path="/" Component={ProductList}></Route>
                    <Route path="/productTable" Component={ProductTable}></Route>
                    <Route path="/newProduct" Component={NewProduct}></Route>
                  </Routes>
                </BrowserRouter>
              </div>
            </div>
          </>
        </ThemeProvider>
    )
}

export default App