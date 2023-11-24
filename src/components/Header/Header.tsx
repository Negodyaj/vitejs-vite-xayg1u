import './Header.scss';
import reactLogo from '../../assets/react.svg';
import { Link } from 'react-router-dom';
import { User } from '../../models/user';

type HeaderProps = {
  userInfo: User | undefined;
};

export const Header = (props: HeaderProps) => {
  return (
    <header>
      <div className="container">
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <nav>
          {props.userInfo ? (
            <>
              <Link to="/">Home</Link>
              <Link to="login">Login/Register</Link>
              <Link to="map">Map</Link>
              <Link to="logn">Bad Login</Link>
            </>
          ) : (
            <>
              <Link to="login">Login/Register</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};
