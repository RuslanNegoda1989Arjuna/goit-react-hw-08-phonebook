import { HomeNavLink } from './Navigation.styled';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedInT = true;

  return (
    <nav>
      <HomeNavLink to="/">Home</HomeNavLink>
      {isLoggedInT && <HomeNavLink to="/phonebook">Phone Book</HomeNavLink>}
    </nav>
  );
};
