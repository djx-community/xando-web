import { Route, Routes } from "react-router-dom";
import "./App.css";
import PageOfflineGame from "./pages/offline-game/PageOfflineGame";
import PageUserHome from "./pages/user-home/PageUserHome";
import pages from "./constants/pages";
import PagePlayWithFriend from "./pages/play-with-friend/PagePlayWithFriend";
import PageAboutUs from "./pages/about-us/PageAboutUs";
import { ToastContextProvider } from "./contexts/ToastContext";import PageExtras from './pages/extras/PageExtras';
import PageHowToPlay from './pages/how-to-play/PageHowToPlay';

function App() {
  return (
    <ToastContextProvider>
      <div className="App bg-white dark:bg-gradient-to-r from-slate-900 to-blue-900 dark:text-white h-screen">
        <Routes>
          <Route path={pages.HOME} element={<PageUserHome />} />
          <Route
            path={pages.PLAY_WITH_FRIEND}
            element={<PagePlayWithFriend />}
          />
          <Route path={pages.OFFLINE_GAME} element={<PageOfflineGame />} />
          <Route path={pages.EXTRAS} element={<PageExtras />} />
        <Route path={pages.HOW_TO_PLAY} element={<PageHowToPlay />} />
        <Route path={pages.ABOUT_US} element={<PageAboutUs />} />
        </Routes>
      </div>
    </ToastContextProvider>
  );
}

export default App;
