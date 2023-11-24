import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { HomePage } from './pages/HomePage/HomePage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { User } from './models/user';
import { MapPage } from './pages/MapPage/MapPage';

function App() {
  const [userInfo, setUserInfo] = useState<User | undefined>(undefined);

  function handleLogIn(user: User) {
    setUserInfo(user);
  }

  return (
    <>
      <Header userInfo={userInfo} />
      {userInfo ? (
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="map" element={<MapPage />} />
          <Route
            path="login"
            element={<LoginPage logInHandler={handleLogIn} />}
          />

          {/* Using path="*"" means "match anything", so this route
            acts like a catch-all for URLs that we don't have explicit
            routes for. */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            index
            path="/"
            element={<LoginPage logInHandler={handleLogIn} />}
          />
          <Route
            path="login"
            element={<LoginPage logInHandler={handleLogIn} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
      Current user is: {userInfo ? userInfo.name : 'undefined'}
    </>
  );
}

export default App;
