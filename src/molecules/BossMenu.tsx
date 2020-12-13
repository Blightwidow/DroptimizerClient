import React from "react";
import styled from "styled-components";
import { Link, Switch, Route } from "react-router-dom";

import ItemMenu from "./ItemMenu";
import Menu from "../atoms/Menu";
import Spinner from "../atoms/Spinner";
import { useBosses } from "../utils/data";

const Wrapper = styled.div`
  display: flex;
  grid-area: bossMenu;
  border-bottom: 1px solid #3d3d3d;
  font-weight: 600;
`;

const BossMenu: React.FC = () => {
  const bosses = useBosses();

  if (!bosses) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <Menu>
        {Object.values(bosses).map((boss) => (
          <Wrapper key={boss.id}>
            <img
              src={`/images/Boss_icon_${boss.name.replaceAll(" ", "")}.png`}
              alt={boss.name}
            />
            <div>
              <p>
                <Link to={`/boss/${boss.id}`}>{boss.name}</Link>
              </p>
            </div>
          </Wrapper>
        ))}
      </Menu>

      <Switch>
        <Route path={`/boss/:bossId`} children={<ItemMenu />} />
      </Switch>
    </React.Fragment>
  );
};

export default BossMenu;
