import React from 'react';
import LootList from './LootList';

const BossHeader = ({ items, boss }) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className="BossWrapper align-items-center">
      <div
        className="BossHeader unselectable bg-dark rounded d-flex pt-2 px-2 mt-2 mx-2 align-items-center"
        onClick={() => setExpanded(!expanded)}
      >
        <img className="BossImage" alt="" src={boss.image} />
        <h3 className="BossName text-light align-middle">{boss.name}</h3>
      </div>
      {expanded && <LootList loot={items} />}
    </div>
  );
};

export default BossHeader;
