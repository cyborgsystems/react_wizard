import 'bootstrap/dist/css/bootstrap.min.css';

import React from "react";
import ReactDOM from "react-dom";
  
class Wizard extends React.Component {
  constructor(props) {
    super(props);
    this._onNext = this._onNext.bind(this);
    this._onPre = this._onPre.bind(this);
    this.state = { counter: 0 };
  }

  _onNext = () => {
    this.setState({counter:this.state.counter+1})
  };
  _onPre = () => {
    this.setState({ counter: this.state.counter -1 })
};

  render() {
    const children = React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        ref: `child${index}`
      })
    );
    return (
      <div className="card">
        <div className="card-body">{children[this.state.counter]}</div>
      
      <div className="card-footer">
      <div style={{float:'right'}}>
      {
       this.state.counter>0 ? <button className="btn btn-danger" onClick={this._onPre}>Prev</button>:''
      }
      {
            this.state.counter<children.length-1?  <button className="btn btn-primary" onClick={this._onNext}>Next</button>:''
      }
    </div>



      </div>

      </div>

    );
  }
}

function App() {
  return (
    <div className="App">
      <Wizard>
        <h1>First</h1>
        <h1>Second</h1>
        <h1>Third</h1>
      </Wizard>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
