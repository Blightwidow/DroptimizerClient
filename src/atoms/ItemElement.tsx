import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import MenuItem from './MenuItem';
import { Item } from '../utils/types';

const ItemImg = styled.img`
  background-color: #1c1c1c;
  height: 40px;
  margin-right: 12px;
  overflow: hidden;
  border-radius: 4px;
  width: 40px;
  object-fit: cover;
`;

const ItemContent = styled.div`
  display: flex;
  justify-content: center;
  width: 200px;
  align-items: center;
`;

const ItemName = styled.p`
  font-weight: 600;
  margin: auto 0;
  width: 100%;
`;

const ItemElement: React.FC<
  { bossId: string; selected?: boolean; item: Item } & React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
> = ({ bossId, item, selected = false, children, ref, ...props }) => (
  <Link key={item.id} to={bossId ? `/boss/${bossId}/item/${item.id}` : `wowhead.com`}>
    <MenuItem {...props} aria-selected={selected}>
      <ItemImg
        alt={item.name}
        src={`https://render-us.worldofwarcraft.com/icons/56/${item.icon}.jpg`}
      />
      <ItemContent>
        <ItemName>{item.name}</ItemName>
      </ItemContent>
    </MenuItem>
  </Link>
);

export default ItemElement;
