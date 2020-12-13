import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import Menu from "../atoms/Menu";
import Spinner from "../atoms/Spinner";
import { useUpgrades } from "../utils/data";

const Wrapper = styled.div`
  display: flex;
  grid-area: upgradeMenu;
  border-bottom: 1px solid #3d3d3d;
  border-right: 1px solid #3d3d3d;
`;

const UpgradeMenu: React.FC = () => {
  // @ts-ignore
  const { itemId } = useParams();
  const upgrades = useUpgrades(itemId);

  if (!upgrades) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <Menu>
        {upgrades.map((upgrade, index) => (
          <Wrapper key={index}>
            <div>
              <p>{upgrade.baseDps}</p>
            </div>
          </Wrapper>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default UpgradeMenu;
