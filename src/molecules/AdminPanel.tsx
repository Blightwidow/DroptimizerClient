import React from 'react';
import { FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

import { GUILD_REALM, GUILD_REGION } from '../config';
import MenuItem from '../atoms/MenuItem';
import PlayerName from '../atoms/PlayerName';
import Popup from '../atoms/Popup';
import { usePlayers } from '../utils/data';
import { Player } from '../utils/types';
import Input from '../atoms/Input';

const ContentWrapper = styled.div`
  display: flex;
  margin: 10% auto 10%;
  width: 50%;
  padding: 8px;
  border-radius: 8px;
  background: #272727;
  z-index: 10;
`;

const Column = styled.div`
  flex-grow: 1;
  max-width: 50%;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 16px;
  align-content: center;
  justify-content: center;
`;

const ColumnDivider = styled.span`
  margin: auto 0;
  height: 300px;
  border: 0;
  border: 1px solid;
  border-image: linear-gradient(
      0deg,
      rgba(28, 180, 111, 0) 0%,
      rgba(28, 180, 111, 0.3) 50%,
      rgba(28, 180, 111, 0) 100%
    )
    1;
`;

const PlayerImg = styled.img`
  background-color: #1c1c1c;
  height: 40px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 4px;
  width: 40px;
  object-fit: cover;
`;

const PlayerContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

const Button = styled.button`
  background: none;
  margin: 8px 0;
  color: inherit;
  border: none;
  cursor: pointer;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-grow: 1;
`;

const AdminPanel: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const players = usePlayers();
  const deletePlayer = React.useCallback((playerId) => {}, []);
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <Popup onClose={onClose}>
      <ContentWrapper>
        <Column>
          {Object.values(players || {}).map((player: Player) => (
            <MenuItem>
              <PlayerImg
                alt={player.name}
                src={`https://render-us.worldofwarcraft.com/character/thumbnail?alt=/shadow/avatar/2-1.jpg`}
              />
              <PlayerContent>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://worldofwarcraft.com/en-gb/character/${GUILD_REGION}/${GUILD_REALM}/${player.name}`}
                >
                  <PlayerName classId={player.class}>{player.name}</PlayerName>{' '}
                </a>
                <Button>
                  <FaTimes size={20} onClick={() => deletePlayer(player.id)} />
                </Button>
              </PlayerContent>
            </MenuItem>
          ))}
        </Column>
        <ColumnDivider />
        <Column>
          {true ? (
            <Form onSubmit={() => {}}>
              <Input placeholder="Simc" />
              <p>OR</p>
              <Input placeholder="reportId" />
              <Button>Submit</Button>
            </Form>
          ) : (
            <Button onClick={loginWithRedirect}>Login for updating or deleting users</Button>
          )}
        </Column>
      </ContentWrapper>
    </Popup>
  );
};

export default AdminPanel;
