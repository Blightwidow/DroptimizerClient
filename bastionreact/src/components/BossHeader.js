import React, {Component} from 'react';

class BossHeader extends Component {
    render() {
        return (
            <div className="BigBox bg-dark rounded d-flex p-3 m-2 align-items-center">
                <img className="BossImage" src={this.props.boss.image} />
                <h2 className="BossName text-light align-middle">{this.props.boss.name}</h2>
                <button className="btn text-light mx-5">Toggle</button>
            </div>
        );
    }
}

export default BossHeader;