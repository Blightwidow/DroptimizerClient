import React from 'react';
import LootHeader from './LootHeader';

const LootList = ({ loot }) => (
  <div className="LootList rounded-bottom m-auto pb-1 pt-2 px-2">
    {loot.map((item) => (
      <LootHeader item={item} key={item.name} />
    ))}
  </div>
);

export default LootList;
