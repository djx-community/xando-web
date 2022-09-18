import { Route, Routes } from 'react-router-dom';
import './App.css';
import PageOfflineGame from './pages/offline-game/PageOfflineGame';
import PageUserHome from './pages/user-home/PageUserHome';
import pages from './constants/pages';
import PagePlayWithFriend from './pages/play-with-friend/PagePlayWithFriend';

function App() {
  return (
    <div className="App bg-white dark:bg-gradient-to-r from-slate-900 to-blue-900 dark:text-white h-screen">
      <Routes>
        <Route path={pages.HOME} element={<PageUserHome />} />
        <Route path={pages.PLAY_WITH_FRIEND} element={<PagePlayWithFriend />} />
        <Route path={pages.OFFLINE_GAME} element={<PageOfflineGame />} />
      </Routes>
    </div>
  );
}

export default App;
