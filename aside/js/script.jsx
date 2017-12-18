/* Chapter 1 -3 Aside
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
*/

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.wakeUpUser();
  }
  wakeUpUser() {
    setTimeout(
      () => alert('Are you going to stare at this boring page forever?'),
      5000
    );
  }
  render() {
    return (
      <div>
        <h1>Just a generic heading</h1>
        <p>
          Not a lot to read about here. I'm just an obligatory paragrah living
          in an example in a JavaScript book. I'm looking for something to make
          my life more exciting.
        </p>
      </div>
    );
  }
}
*/

/*
const App = () => {
  let contentArr = [];
  let i = 0;
  while (i < 2) {
    contentArr.push(
      <span key={i}>
        Happy Birthday to you<br />
      </span>
    );
    i = i + 1;
  }
  let name = 'Joe';
  contentArr.push(
    <span key="2">
      {`Happy Birthday dear ${name}`}
      <br />
    </span>
  );
  contentArr.push(<span key="3">Happy Birthday to you</span>);
  return <div>{contentArr}</div>;
};
*/

const App = props => {
  let contentArr = [];
  let word = props.word;
  let count = props.count;
  while (count > 0) {
    contentArr.push(
      <span>
        {`${count} ${word} of beer on the wall`}
        <br />
      </span>
    );
    contentArr.push(
      <span>
        {`${count} ${word} of beer,`}
        <br />
      </span>
    );
    contentArr.push(
      <span>
        Take one down, and pass it around,<br />
      </span>
    );
    count = count - 1;
    if (count > 0) {
      contentArr.push(
        <span>
          {`${count} ${word} of beer on the wall.`}
          <br />
        </span>
      );
    } else {
      contentArr.push(
        <span>
          {`No more ${word} of beer on the wall.`}
          <br />
        </span>
      );
    }
  }
  return <div>{contentArr}</div>;
};
ReactDOM.render(
  <App word="cans" count="5" />,
  document.getElementById('content')
);
