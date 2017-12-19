class Content extends React.Component {
  componentWillMount() {
    console.log(ReactDOM.findDOMNode(this));
  }
  componentDidMount() {
    console.log(ReactDOM.findDOMNode(this));
  }
  render() {
    return <div>Yo Gon</div>;
  }
}
ReactDOM.render(<Content />, document.getElementById('content'));
