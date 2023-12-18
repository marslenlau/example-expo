import ReactPlayer from 'react-player/youtube'
import React, {Fragment} from 'react'
//? import router dom
import {BrowserRouter, Routes, Route} from "react-router-dom";
//? import layouts
import HomeLayout from "./layouts/HomeLayout";
import ContentLayout from "./layouts/ContentLayout";
//? import pages
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Preferences from './pages/Preferences';
import List from './pages/List';
//?
import {LoginProvider} from './context/LoginProvider'
import { InformationProvider } from './context/InfrormationProvider';
function App() {
  return (
    <>
      <BrowserRouter>
          <InformationProvider>
        <LoginProvider>
            <Routes>
              <Route path={`/`} element={<HomeLayout/>}>
                <Route index element={<Login/>}/>
              </Route>
              <Route path={`/dashboard`} element={<ContentLayout/>}>
                <Route index element={<Dashboard/>}/>
                <Route path='preferences' element={<Preferences/>}/>
                <Route path='list' element={<List/>}/>
              </Route>
            </Routes>
        </LoginProvider>
          </InformationProvider>
      </BrowserRouter>

      {/* <ReactPlayer url='https://www.youtube.com/watch?v=i26HL4IhMdI' controls={true}/> */}
    </>
  )
}

export default App
