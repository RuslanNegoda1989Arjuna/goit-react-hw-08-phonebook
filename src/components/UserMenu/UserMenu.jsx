// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
import { UserBox, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  // const dispatch = useDispatch();
  // const { user } = useAuth();
  const user = {
    name: 'Ruslan',
  };
  function logOut() {
    console.log('Im Dispatch');
  }

  return (
    <UserBox>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button" onClick={() => logOut()}>
        Logout
      </button>
    </UserBox>
  );
};

// <button type="button" onClick={() => dispatch(logOut())}>
//   Logout
// </button>;
