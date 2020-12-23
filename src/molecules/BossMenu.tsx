import React from 'react';
import styled from 'styled-components';
import { Link, useParams } from 'react-router-dom';

import Menu from '../atoms/Menu';
import MenuItem from '../atoms/MenuItem';
import Spinner from '../atoms/Spinner';
import { useBosses } from '../utils/data';
import { UrlParameters } from '../utils/types';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: auto;
`;

const BossImg = styled.img`
  height: 40px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 4px;
  width: 40px;
  object-fit: cover;
`;

const BossContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

const BossName = styled.p`
  font-weight: 600;
  margin: auto 0;
  width: 100%;
`;

const BossMenu: React.FC = () => {
  const { bossId } = useParams<UrlParameters>();
  const bosses = useBosses();

  if (!bosses) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Menu placeholder="No bosses found">
        {Object.values(bosses).map((boss) => (
          <Link key={boss.id} to={`/boss/${boss.id}`}>
            <MenuItem aria-selected={Number.parseInt(bossId) === boss.id}>
              <BossImg
                alt={boss.name}
                src={`/images/Boss_icon_${boss.name.replaceAll(' ', '')}.png`}
              />
              <BossContent>
                <BossName>{boss.name}</BossName>
              </BossContent>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default BossMenu;
