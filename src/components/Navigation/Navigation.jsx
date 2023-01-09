import { useAuth } from 'hook';
import { HomeNavLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  // const isLoggedInT = true;

  return (
    <nav>
      <HomeNavLink to="/">Home</HomeNavLink>
      {isLoggedIn && <HomeNavLink to="/phonebook">Phone Book</HomeNavLink>}
    </nav>
  );
};
