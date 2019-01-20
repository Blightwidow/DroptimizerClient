import React, {Component} from 'react';
import DropList from './DropList';

class BossHeader extends Component {
    constructor() {
        super();
        this.state = {
          childVisible: false
        }
    }

    render() {
        return (
            <div className="BossBox align-items-center">
                <div className="BossHeader bg-dark rounded d-flex p-3 mt-2 mx-2 align-items-center">
                    <img className="BossImage" alt="" src={this.props.boss.image} />
                    <h2 className="BossName text-light align-middle">{this.props.boss.name}</h2>
                    <button className="btn text-light mx-5" onClick={() => this.onClick()}>Toggle</button>
                </div>
                {
                this.state.childVisible
                    ? <DropList/>
                    : null
                }
            </div>
        );
    }

    onClick() {
        this.setState(prevState => ({ childVisible: !prevState.childVisible }));
    }
}

export default BossHeader;