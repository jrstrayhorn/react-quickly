/*
let helloWorldReactElement = <h1>Hello World!</h1>;
ReactDOM.render(helloWorldReactElement, document.getElementById('content'));
*/

let helloWorldReactElement = React.createElement(
  "h1",
  null,
  "Hello World!"
);
class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      helloWorldReactElement,
      helloWorldReactElement
    );
  }
}

class DateTimeNow extends React.Component {
  render() {
    return React.createElement(
      "p",
      null,
      "Current date and time is ",
      new Date().toLocaleString(),
      "."
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return React.createElement(
      "a",
      { href: this.props.url, title: this.props.label, target: "_blank" },
      "Profile"
    );
  }
}

class Content extends React.Component {
  getUrl() {
    return 'http://www.google.com';
  }
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Your REST API URL is:",
        React.createElement(
          "a",
          { href: this.getUrl() },
          this.getUrl()
        )
      )
    );
  }
}

class MyAuthButton extends React.Component {
  // approach 1: Variable
  render() {
    let link;
    if (this.props.user.session) link = React.createElement(
      "a",
      { href: "/logout" },
      "Logout"
    );else link = React.createElement(
      "a",
      { href: "/login" },
      "Login"
    );
    return React.createElement(
      "div",
      null,
      link
    );
  }

  // approach 2: Expression
  render() {
    let link = sessionFlag => {
      if (sessionFlag) return React.createElement(
        "a",
        { href: "/logout" },
        "Logout"
      );else return React.createElement(
        "a",
        { href: "/login" },
        "Login"
      );
    };
    return React.createElement(
      "div",
      null,
      link(this.props.users.session)
    );
  }

  // approach 3: ternary operator
  render() {
    return React.createElement(
      "div",
      null,
      this.props.user.session ? React.createElement(
        "a",
        { href: "/logout" },
        "Logout"
      ) : React.createElement(
        "a",
        { href: "/login" },
        "Login"
      )
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
    return React.createElement(
      "div",
      null,
      React.createElement(
        "a",
        { href: sessionFlag ? '/logout' : '/login' },
        sessionFlag ? 'Logout' : 'Login'
      )
    );
  }
}

const MyApp = () => {
  return React.createElement(
    "div",
    null,
    React.createElement(HelloWorld, null),
    React.createElement(DateTimeNow, null),
    React.createElement(ProfileLink, { url: "/users/azat", label: "Profile for Azat" }),
    React.createElement(Content, null)
  );
};

ReactDOM.render(React.createElement(MyApp, null), document.getElementById('content'));
