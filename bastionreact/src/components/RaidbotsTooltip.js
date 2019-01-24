import React, {Component} from 'react';
import Moment from 'react-moment';

class RaidbotsTooltip extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="rbTooltip rounded bg-dark">
                <div className="d-flex col-auto m-2  justify-self-center ">
                    <div className="row mx-auto text-light rbttText"><Moment fromNow>{this.props.player.lastModified}</Moment></div>              
                </div>
            </div>
        );
    }
}

export default RaidbotsTooltip;