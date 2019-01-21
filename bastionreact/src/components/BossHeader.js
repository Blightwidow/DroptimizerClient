import React, {Component} from 'react';
import LootList from './LootList';


class BossHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
        }
    }

    onHeaderClick = (event) => {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <div className="BossWrapper align-items-center">
                <div className="BossHeader unselectable bg-dark rounded d-flex p-3 mt-2 mx-2 align-items-center" onClick={this.onHeaderClick}>
                    <img className="BossImage" alt="" src={this.props.boss.image} />
                    <h3 className="BossName text-light align-middle">{this.props.boss.name}</h3>
                </div>
                { this.state.collapsed ? null : <LootList loot={this.props.boss.loot} players={this.props.players}/> }
            </div>
        );
    }
}

export default BossHeader;