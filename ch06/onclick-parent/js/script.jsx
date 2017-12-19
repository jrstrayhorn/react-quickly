const ClickCounterButton = props => {
  // can't use this.props for props just props.handler
  // when using stateless component
  return (
    <button onClick={props.handler} className="btn btn-danger">
      Don't touch me with your dirty hands!!
    </button>
  );
};

const Counter = props => <span>Clicked {props.value} times.</span>;

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { counter: 0 };
  }
  handleClick(event) {
    this.setState({ counter: ++this.state.counter });
  }
  render() {
    return (
      <div>
        <ClickCounterButton handler={this.handleClick} />
        <br />
        <Counter value={this.state.counter} />
      </div>
    );
  }
}
ReactDOM.render(<Content />, document.getElementById('content'));
