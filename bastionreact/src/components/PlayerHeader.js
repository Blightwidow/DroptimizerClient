import React, {Component} from 'react';

class PlayerHeader extends Component {
    constructor(props) {
        super();
        this.state = {
            collapsed: true,
        }
    }
    
    render() {
        let cls = "class" + this.props.player.class;
        return (
            <div className="PlayerWrapper pr-auto w-50">
                <a className="armoryLink" href={"https://worldofwarcraft.com/en-us/character/frostmourne/"+this.props.player.name } target="_blank">
                    <div className="PlayerHeader d-flex align-items-center my-2 ">
                        <img className="PlayerImage rounded mr-2" alt="" src={this.props.player.image}/>
                        
                            <h5 className={"PlayerName " + cls}>{this.props.player.name}</h5>
                        
                    </div>
                </a>
            </div>


        );
    }
}

export default PlayerHeader;