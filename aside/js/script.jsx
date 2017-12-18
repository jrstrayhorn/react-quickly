class MainHeading extends React.Component {
  render() {
    return <h1>{this.props.text}</h1>;
  }
}

class SubHeading extends React.Component {
  render() {
    return <h2>{this.props.text}</h2>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <MainHeading text="This is the Main Heading" />
        <p>
          This text might be an introduction to the rest of the page. And if the
          page is a long one it might be split up into several sub-headings.
        </p>
        <SubHeading text="This is a Sub-Heading" />
        <p>
          Many long articles have sub-headings so to help you follow the
          structure of thwat is being written. There may even be
          sub-sub-headings (or lower-level headings).
        </p>
        <SubHeading text="Another Sub-Heading" />
        <p>Here you can see another sub-heading.</p>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('content'));
