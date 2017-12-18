class MyApp extends React.Component {
  render() {
    return (
      <div>
        <MyClock />
      </div>
    );
  }
}

class MyClock extends React.Component {
  render() {
    return <span>{Date.now().toString()}</span>;
  }
}

ReactDOM.render(<MyApp />, document.getElementById('content'));
