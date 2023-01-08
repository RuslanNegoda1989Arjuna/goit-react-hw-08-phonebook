// import { MdAppRegistration, MdLogin } from 'react-icons/md';

import { Header } from './AppBar.styled';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'hook';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  // const isLoggedIn = false;

  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

// return (
//   <Header>
//     <Nav>
//       <NavLink to="/">
//         <RiHomeHeartFill size={22} />
//         Home
//       </NavLink>
//       {navItems.map(({ href, text, icon: Icon }) => (
//         <NavLinks to={href} key={href}>
//           <Icon size={22} />
//           {text}
//         </NavLinks>
//       ))}
//     </Nav>
//   </Header>
// );
