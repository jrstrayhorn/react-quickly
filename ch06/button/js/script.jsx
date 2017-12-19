/*class SaveButton extends React.Component {
  handleSave(event) {
    console.log(this, event);
  }
  render() {
    return <button onClick={this.handleSave.bind(this)}>Save</button>;
  }
}*/

/*
class MouseoverExample extends React.Component {
  render() {
    return (
      <div
        style={{ border: "1px solid red" }}
        onMouseOver={() => {
          console.log("mouse is over");
        }}
      >
        Open DevTools and move your mouse cursor over here
      </div>
    );
  }
}*/

class Mouse extends React.Component {
  handleMouseOver(event) {
    console.log("mouse is over with event");
    console.dir(event.target);
  }
  render() {
    return (
      <div>
        <div
          style={{ border: "1px solid red" }}
          onMouseOver={this.handleMouseOver.bind(this)}
        >
          Open DevTools and move your mouse cursor over here
        </div>
      </div>
    );
  }
}
ReactDOM.render(<Mouse />, document.getElementById("content"));
