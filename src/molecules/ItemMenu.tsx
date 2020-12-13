import React from "react";
import styled from "styled-components";
import { Link, useParams, useRouteMatch, Switch, Route } from "react-router-dom";

import Menu from "../atoms/Menu";
import Spinner from "../atoms/Spinner";
import { useItems } from "../utils/data";
import UpgradeMenu from "./UpgradeMenu";

const Wrapper = styled.div`
  display: flex;
  grid-area: itemMenu;
  border-bottom: 1px solid #3d3d3d;
  border-right: 1px solid #3d3d3d;
`;

const ItemMenu: React.FC = () => {
  // @ts-ignore
  const { bossId } = useParams();
  let { path } = useRouteMatch();
  const items = useItems(bossId);

  if (!items) {
    return <Spinner />;
  }

  return (
    <React.Fragment>
      <Menu>
        {Object.values(items).map((item) => (
          <Wrapper key={item.id}>
            <div>
              <p>
                <Link to={`/boss/${bossId}/item/${item.id}`}>{item.name}</Link>
              </p>
            </div>
          </Wrapper>
        ))}
      </Menu>

      <Switch>
        <Route path={`${path}/item/:itemId`} children={<UpgradeMenu />} />
      </Switch>
    </React.Fragment>
  );
};

export default ItemMenu;
