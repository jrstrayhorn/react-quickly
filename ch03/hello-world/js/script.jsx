/*
let helloWorldReactElement = <h1>Hello World!</h1>;
ReactDOM.render(helloWorldReactElement, document.getElementById('content'));
*/

let helloWorldReactElement = <h1>Hello World!</h1>;
class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {helloWorldReactElement}
        {helloWorldReactElement}
      </div>
    );
  }
}

class DateTimeNow extends React.Component {
  render() {
    return <p>Current date and time is {new Date().toLocaleString()}.</p>;
  }
}

class ProfileLink extends React.Component {
  render() {
    return (
      <a href={this.props.url} title={this.props.label} target="_blank">
        Profile
      </a>
    );
  }
}

class Content extends React.Component {
  getUrl() {
    return 'http://www.google.com';
  }
  render() {
    return (
      <div>
        <p>
          Your REST API URL is:
          <a href={this.getUrl()}>{this.getUrl()}</a>
        </p>
      </div>
    );
  }
}

class MyAuthButton extends React.Component {
  // approach 1: Variable
  render() {
    let link;
    if (this.props.user.session) link = <a href="/logout">Logout</a>;
    else link = <a href="/login">Login</a>;
    return <div>{link}</div>;
  }

  // approach 2: Expression
  render() {
    let link = sessionFlag => {
      if (sessionFlag) return <a href="/logout">Logout</a>;
      else return <a href="/login">Login</a>;
    };
    return <div>{link(this.props.users.session)}</div>;
  }

  // approach 3: ternary operator
  render() {
    return (
      <div>
        {this.props.user.session ? (
          <a href="/logout">Logout</a>
        ) : (
          <a href="/login">Login</a>
        )}
      </div>
    );
  }

  // approach 4: using an IIFE
  /*
  render() {
    return (
      <div>
        {sessionFlag => {
          if (sessionFlag) return <a href="/logout">Logout</a>;
          else return <a href="/login">Login</a>;
        }(this.props.user.session) }
      </div>
    );
  }*/
  // another variation using ternary operator
  render() {
    let sessionFlag = this.props.user.session;
    return (
      <div>
        <a href={sessionFlag ? '/logout' : '/login'}>
          {sessionFlag ? 'Logout' : 'Login'}
        </a>
      </div>
    );
  }
}

const MyApp = () => {
  return (
    <div>
      <HelloWorld />
      <DateTimeNow />
      <ProfileLink url="/users/azat" label="Profile for Azat" />
      <Content />
    </div>
  );
};

ReactDOM.render(<MyApp />, document.getElementById('content'));
