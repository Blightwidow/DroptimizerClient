import React from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import Menu from '../atoms/Menu';
import Spinner from '../atoms/Spinner';
import { useUpgrades } from '../utils/data';
import Moment from 'react-moment';
import { UrlParameters } from '../utils/types';
import MenuItem from '../atoms/MenuItem';
import PlayerName from '../atoms/PlayerName';
import { GUILD_REALM, GUILD_REGION } from '../config';
import { FaExternalLinkAlt } from 'react-icons/fa';
import ProgressBar from '../atoms/ProgressBar';
import Rank from '../atoms/Rank';

const Wrapper = styled.div`
  flex-grow: 1;
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const PlayerImg = styled.img`
  background-color: #1c1c1c;
  height: 40px;
  overflow: hidden;
  border-radius: 4px;
  width: 40px;
  object-fit: cover;
`;

const PlayerInfoWrapper = styled.div`
  margin-right: 16px;
`;

const SecondaryInfo = styled.p`
  margin: 4px 0;
  font-size: 0.8rem;
  opacity: 0.8;
`;

const PrimaryInfo = styled.p`
  font-size: 1rem;
  margin: 4px 0;
  color: rgba(28, 180, 111, 0.9);
  text-align: right;
`;

const Divider = styled.hr`
  margin: 0 0 2px;
  border: 0;
  border-bottom: 1px solid;
  border-image: linear-gradient(
      90deg,
      rgba(28, 180, 111, 0) 0%,
      rgba(28, 180, 111, 0.3) 20%,
      rgba(28, 180, 111, 0) 80%
    )
    1;
`;

const IncreaseWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

const IncreaseBarWrapper = styled.div`
  flex-grow: 1;
  margin: 0 16px;
`;

const UpgradeMenu: React.FC = () => {
  const { itemId } = useParams<UrlParameters>();
  const upgrades = useUpgrades(Number.parseInt(itemId));
  const maxDelta = React.useMemo(() => {
    return upgrades?.reduce((acc, upgrade) => Math.max(acc, upgrade.dps - upgrade.baseDps), 0) ?? 0;
  }, [upgrades]);

  if (!upgrades) {
    return <Spinner />;
  }

  return (
    <Wrapper>
      <Menu placeholder="No upgrades for this item">
        {upgrades.map((upgrade, index) => (
          <React.Fragment key={index}>
            {index > 0 && <Divider />}
            <MenuItem style={{ margin: '0' }}>
              <ImageWrapper>
                <PlayerImg
                  alt={upgrade.name}
                  src={`https://render-us.worldofwarcraft.com/character/thumbnail?alt=/shadow/avatar/2-1.jpg`}
                />
                <Rank style={{ margin: '8px 0 0' }} rank={index + 1}>
                  {index + 1}
                </Rank>
              </ImageWrapper>
              <PlayerInfoWrapper>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://worldofwarcraft.com/en-gb/character/${GUILD_REGION}/${GUILD_REALM}/${upgrade.name}`}
                >
                  <PlayerName classId={upgrade.class}>
                    {upgrade.name}{' '}
                    <FaExternalLinkAlt color="rgba(255,255,255,0.3)" style={{ padding: '0 4px' }} />
                  </PlayerName>
                </a>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={`https://raidbots.com/simbot/report/${upgrade.reportID}`}
                >
                  <SecondaryInfo>
                    Report: <Moment fromNow>{upgrade.timeStamp}</Moment>{' '}
                    <FaExternalLinkAlt style={{ padding: '0 4px' }} />
                  </SecondaryInfo>
                </a>
                <SecondaryInfo>
                  Simc:{' '}
                  {upgrade.simcLastModified ? (
                    <Moment fromNow>{upgrade.simcLastModified}</Moment>
                  ) : (
                    'Never'
                  )}
                </SecondaryInfo>
              </PlayerInfoWrapper>
              <IncreaseWrapper>
                <IncreaseBarWrapper>
                  <ProgressBar percent={((upgrade.dps - upgrade.baseDps) * 100) / maxDelta} />
                  <SecondaryInfo style={{ margin: '8px 0 0', textAlign: 'center' }}>
                    {Math.round(upgrade.baseDps)} DPS {'->'} {Math.round(upgrade.dps)} DPS
                  </SecondaryInfo>
                </IncreaseBarWrapper>
                <div>
                  <PrimaryInfo style={{ fontSize: '1.3rem' }}>
                    + {((upgrade.dps * 100) / upgrade.baseDps - 100).toFixed(2)} %
                  </PrimaryInfo>
                  <PrimaryInfo>+ {Math.round(upgrade.dps - upgrade.baseDps)} DPS</PrimaryInfo>
                </div>
              </IncreaseWrapper>
            </MenuItem>
          </React.Fragment>
        ))}
      </Menu>
    </Wrapper>
  );
};

export default UpgradeMenu;
