import { useDispatch } from 'react-redux';

import { useAuth } from 'hook';
import { UserBox, UserName } from './UserMenu.styled';
import { logOut } from 'redux/auth/authOperations';
import { contactsApi } from 'redux/sliceContacts';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserBox>
      <UserName>Welcome, {user.name} </UserName>
      <button
        type="button"
        onClick={() =>
          dispatch(logOut())
            .unwrap()
            .then(() => {
              contactsApi.util.resetApiState();
            })
        }
      >
        Logout
      </button>
    </UserBox>
  );
};

// <button type="button" onClick={() => dispatch(logOut())}>
//   Logout
// </button>;
