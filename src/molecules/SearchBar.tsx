import React from 'react';
import styled from 'styled-components';

import Input from '../atoms/Input';
import Popup from '../atoms/Popup';
import ItemElement from '../atoms/ItemElement';
import { useApi } from '../utils/api';
import { Item } from '../utils/types';

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10% auto 10%;
  width: 50%;
  padding: 8px;
  border-radius: 8px;
  background: #272727;
  z-index: 10;
`;

const ResultWrapper = styled.div`
  margin: 8px 24px;
`;

const Placeholder = styled.p`
  text-align: center;
`;

const SearchBar: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [inputValue, setInputValue] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const { data } = useApi(`v2/items/search`, {
    method: 'POST',
    body: JSON.stringify({ term: inputValue }),
  });

  const searchItems = React.useMemo(() => {
    if (!data) return [];

    return data.slice(0, 6) || [];
  }, [data]);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  return (
    <Popup onClose={onClose}>
      <ContentWrapper>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
          style={{ margin: '8px' }}
        />
        {!!inputValue && (
          <ResultWrapper>
            {searchItems.length === 0 && <Placeholder>No Results</Placeholder>}
            {searchItems.map((item: Item) => (
              <ItemElement key={item.id} bossId="1" item={item} onClick={onClose} />
            ))}
          </ResultWrapper>
        )}
      </ContentWrapper>
    </Popup>
  );
};

export default SearchBar;
