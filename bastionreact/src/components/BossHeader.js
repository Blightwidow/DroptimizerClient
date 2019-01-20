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
            <div>
                <div className="BossHeader bg-dark rounded d-flex p-3 m-2 align-items-center" onClick={this.onHeaderClick}>
                    <img className="BossImage" alt="" src={this.props.boss.image} />
                    <h2 className="BossName text-light align-middle">{this.props.boss.name}</h2>
                </div>
                { this.state.collapsed ? null : <LootList loot={this.props.boss.loot}/> }
            </div>
        );
    }
}

export default BossHeader;