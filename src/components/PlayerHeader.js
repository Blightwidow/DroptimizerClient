import React from 'react';
import Moment from 'react-moment';

import Tooltip from './Tooltip';

const SPECS = {
  'Protection Warrior': 'Tank',
  'Protection Paladin': 'Tank',
  'Holy Paladin': 'Healer',
  'Discipline Priest': 'Healer',
  'Holy Priest': 'Healer',
  'Blood Death Knight': 'Tank',
  'Restoration Shaman': 'Healer',
  'Brewmaster Monk': 'Tank',
  'Mistweaver Monk': 'Healer',
  'Guardian Druid': 'Tank',
  'Restoration Druid': 'Healer',
  'Vengeance Demon Hunter': 'Tank',
};

const PlayerHeader = ({ rank, item, maxIncrease, player }) => {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     hideArmory: true,
  //     hideRaidbots: true,
  //     specs:
  //   };
  // }
  // armoryEnter = () => {
  //   this.setState({ hideArmory: false });
  // };
  // armoryLeave = () => {
  //   this.setState({ hideArmory: true });
  // };

  const roleIcon = React.useMemo(() => {
    if (!player.spec) {
      return 'wowico';
    }

    const role = SPECS[player.spec] || 'default';
    const mapping = {
      Tank: 'tankico',
      Healer: 'healerico',
      default: 'dpsico',
    };

    return mapping[role] || mapping.default;
  }, [player.spec]);
  const dpsIncrease = Math.round(player.dps - player.baseDps);
  const percentIncrease = Math.round((1000 * (player.dps - player.baseDps)) / player.baseDps) / 10;
  const globalIncrease = Math.min(98, Math.round((dpsIncrease * 100) / maxIncrease));
  const signStyle = dpsIncrease > 0 ? 'positive' : 'negative';

  return (
    <div className="PlayerListItem rounded">
      <div className="PlayerWrapper unselectable">
        <div className="PlayerHeader align-items-center row p-2">
          <div className="col-7 col-md-4 pr-0 align-self-center order-first">
            <div className="row">
              <h4 className={`PlayerRank text-center pt-1 pl-2 rank${rank}`}>{rank}</h4>
              <a
                className="armoryLink"
                href={`https://worldofwarcraft.com/en-us/character/frostmourne/${player.name}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <div className="row mx-0 p-0">
                  <img
                    className="PlayerImage rounded mr-2 align-self-center "
                    alt=""
                    src={`https://render-us.worldofwarcraft.com/character/${player.thumbnail}?alt=/shadow/avatar/2-1.jpg`}
                  />
                  <h5 className={`PlayerName pt-2 class${player.class}`}>{player.name}</h5>
                </div>
              </a>
              <div className="row mx-auto mx-0 p-0">
                <div className="tooltipWrapper">
                  <a
                    className="d-flex align-items-center mr-1 mb-1"
                    rel="noopener noreferrer"
                    href={'https://raidbots.com/simbot/report/' + player.reportID}
                    target="_blank"
                  >
                    <img className="rbIco " src="src/rb1.png" alt="" height="30px" />
                  </a>
                  <Tooltip>
                    <div className="row justify-content-center text-light rbttText2">
                      Last Updated
                    </div>
                    <div className="row justify-content-center text-light rbttText">
                      <Moment className="text-justify-center" fromNow>
                        {player.timeStamp}
                      </Moment>
                    </div>
                  </Tooltip>
                </div>
                <div className="tooltipWrapper">
                  <img
                    className="roleIco ml-3 align-self-center"
                    src={`src/${roleIcon}.png`}
                    alt=""
                    height="30px"
                  />
                  <Tooltip>
                    <div className="row justify-content-center text-light rbttText2">
                      Last Logout
                    </div>
                    <div className="row justify-content-center text-light rbttText">
                      <Moment className="text-justify-center" fromNow>
                        {player.lastModified}
                      </Moment>
                    </div>
                  </Tooltip>
                </div>
              </div>
            </div>
          </div>
          <div className="w-100 d-md-none"></div>

          <div className="col d-block d-md-none"></div>
          <div className="col-8 col-md-4 px-2 mx-4 ml-2 align-self-center">
            <div className="row justify-content-between">
              <h5 className={'PlayerSim pt-1 mx-1 text-muted'}>{`${Math.round(
                player.baseDps
              )} dps`}</h5>
              <i className="fas fa-arrow-right text-muted pt-2"></i>
              <h5 className={'PlayerSim pt-1 mx-1 text-muted '}>
                {`${Math.round(player.dps)} dps`}
              </h5>
              <h5 className={`PlayerSim pt-1 mx-1 ml-2 ${signStyle}`}>{`${
                dpsIncrease > 0 ? '+' : ''
              }${dpsIncrease} dps`}</h5>
            </div>
          </div>
          <div className="col d-block d-md-none"></div>

          <div className="col align-self-center d-none d-md-flex p-0 mr-3" height="20px">
            <svg className="graphSVG" width={'100%'} height="12px">
              <rect className="svgLine1" width="100%" y="30%" height="2px" rx="2" ry="2"></rect>
              <rect
                className={`svgLine2 ${signStyle}`}
                x={0}
                width={globalIncrease + '%'}
                y="27%"
                height="3px"
                rx="2"
                ry="2"
              ></rect>
              <circle className="svgCircle" r="3.5" cx={globalIncrease + '%'} cy="42%"></circle>
            </svg>
          </div>

          <div className="col-1 pr-2 d-none d-md-block ">
            <div className="row justify-content-end ml-1 mr-1">
              <h4 className={`percentText ${signStyle}`}>{`${
                percentIncrease > 0 ? '+' : ''
              }${percentIncrease}%`}</h4>
            </div>
          </div>
          <div className="col-5 pr-2 d-block d-md-none order-first">
            <div className="row justify-content-end ml-1 mr-1">
              <h4 className={`percentText ${signStyle}`}>{`${
                percentIncrease > 0 ? '+' : ''
              }${percentIncrease}%`}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerHeader;
