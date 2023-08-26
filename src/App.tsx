import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import PageOfflineGame from './pages/offline-game/PageOfflineGame'
import PageUserHome from './pages/user-home/PageUserHome'
import { PAGES } from './constants/pages'
import PagePlayWithFriend from './pages/play-with-friend/PagePlayWithFriend'
import { ToastContextProvider } from './contexts/ToastContext'
import { AlertContextProvider } from './contexts/AlertContext'
import PageExtras from './pages/extras/PageExtras'
import PageHowToPlay from './pages/how-to-play/PageHowToPlay'
import { BackDropContextProvider } from './contexts/BackDropContext'
import PageAboutUs from './pages/extras/about-us/PageAboutUs'
import AboutUsDeveloperCard from './components/about-us-card/AboutUSDeveloperCard'

function App () {
  return (
    <ToastContextProvider>
      <AlertContextProvider>
        <BackDropContextProvider>
          <div className="App bg-white dark:bg-gradient-to-r from-slate-900 to-blue-900 dark:text-white h-screen">
            <Routes>
              <Route path={PAGES.HOME} element={<PageUserHome />} />
              <Route
                path={PAGES.PLAY_WITH_FRIEND}
                element={<PagePlayWithFriend />}
              />
              <Route path={PAGES.OFFLINE_GAME} element={<PageOfflineGame />} />
              <Route path={PAGES.EXTRAS} element={<PageExtras />} />
              <Route path={PAGES.HOW_TO_PLAY} element={<PageHowToPlay />} />
              <Route path={PAGES.ABOUT_US} element={<PageAboutUs />} />
              <AboutUsDeveloperCard name={''} icon={undefined} url={''} />
            </Routes>
          </div>
        </BackDropContextProvider>
      </AlertContextProvider>
    </ToastContextProvider>
  )
}

export default App
