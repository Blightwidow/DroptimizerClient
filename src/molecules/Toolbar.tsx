import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';
import { FaSearch, FaCog, FaUser, FaUserSlash } from 'react-icons/fa';

import SearchBar from './SearchBar';
import AdminPanel from './AdminPanel';

const Button = styled.button`
  background: none;
  margin: 8px 0;
  color: inherit;
  border: none;
  cursor: pointer;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  grid-area: toolbar;
  background: #101010;
  padding: 4px;
`;

const Toolbar: React.FC = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [isSearch, setIsSearch] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);

  return (
    <Wrapper>
      {isSearch && <SearchBar onClose={() => setIsSearch(false)} />}
      <Button onClick={() => setIsSearch(!isSearch)}>
        <FaSearch size={25} />
      </Button>
      {isAdmin && <AdminPanel onClose={() => setIsAdmin(false)} />}
      {true && (
        <Button onClick={() => setIsAdmin(!isAdmin)}>
          <FaCog size={25} />
        </Button>
      )}
      <Button onClick={() => (isAuthenticated ? logout() : loginWithRedirect())}>
        {isAuthenticated ? <FaUserSlash size={25} /> : <FaUser size={25} />}
      </Button>
    </Wrapper>
  );
};

export default Toolbar;
