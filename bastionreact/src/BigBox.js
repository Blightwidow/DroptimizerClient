import React, {Component} from 'react';
import DropList from './DropList';

class BigBox extends Component {
    state = {
        droplist : false
    }

    toggleDropState = () => {
        console.log("toggle");
        this.setState({
            droplist : !this.state.droplist
        })
    }
    render() {
        const { bossData } = this.props;
        return (
        <div>
            <TitleBox bossData={bossData} />
            <BoxBody />
            {this.state.droplist && <DropList />}
        </div>
        );
    }
}

const TitleBox = props => { 

    const rows = props.bossData.map((row, index) => {
        return (
            <div className="BigBox bg-dark rounded d-flex p-3 m-2 align-items-center" key={index}>
                <img className="BossImage" alt="" src={row.image} />
                <h2 className="BossName text-light align-middle">{row.name}</h2>
                <button className="btn text-light mx-5" onClick={BigBox.toggleDropState}>Toggle</button>
            </div>
        );
    });

    return <div id="BigBoxes">{rows}</div>;
}

const BoxBody = () => { 
    return (
        <p></p>
    );
}


export default BigBox;