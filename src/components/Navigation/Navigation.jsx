import { HomeNavLink } from './Navigation.styled';
// import { useAuth } from 'hooks';

export const Navigation = () => {
  // const { isLoggedIn } = useAuth();
  const isLoggedInT = false;

  return (
    <nav>
      <HomeNavLink to="/">Home</HomeNavLink>
      {isLoggedInT && <HomeNavLink to="/tasks">Tasks</HomeNavLink>}
    </nav>
  );
};
