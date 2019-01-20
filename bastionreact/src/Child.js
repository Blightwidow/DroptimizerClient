class Child extends React.Component {
  render() {
    return (<div>I'm the child</div>);
  }
}

class ShowHide extends React.Component {
  constructor() {
    super();
    this.state = {
      childVisible: false
    }
  }

  render() {
    return (
      <div>
        <BodyBox/>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
      </div>
    )
  }

  onClick() {
    this.setState(prevState => ({ childVisible: !prevState.childVisible }));
  }
};

const BoxBody = () => { 
  return (
    <div onClick={() => this.onClick()}>
      Parent - click me to show/hide my child
    </div>
  );
}

React.render(<ShowHide />, document.getElementById('container'));