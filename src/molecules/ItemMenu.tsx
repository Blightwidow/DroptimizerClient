import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Menu from '../atoms/Menu';
import Spinner from '../atoms/Spinner';
import { useItems } from '../utils/data';
import { UrlParameters } from '../utils/types';
import ItemElement from '../atoms/ItemElement';

const Wrapper = styled.div`
  display: flex;
  margin-bottom: auto;
`;

const ItemMenu: React.FC = () => {
  const { bossId, itemId } = useParams<UrlParameters>();
  const items = useItems(Number.parseInt(bossId));

  if (!items) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Menu placeholder="No items for this boss">
        {Object.values(items).map((item) => (
          <ItemElement key={item.id} item={item} bossId={bossId} selected={Number.parseInt(itemId) === item.id} />
        ))}
      </Menu>
    </Wrapper>
  );
};

export default ItemMenu;
