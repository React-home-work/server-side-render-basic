import React from 'react';
import ReactDOM from 'react-dom';

// var isNode = typeof module !== 'undefined' && module.exports
// , React = isNode ? require('react') : window.React
// , ReactDOM = isNode ? require('react') : window.ReactDOM;

class HelloMessage extends React.Component {
  handleClick() {
    alert('You clicked!');
  }

  render() {
      // return <h1> hello, webpack</h1>
    //   return <h1>Hello, {this.props.name}</h1>;
    return (<button onClick={this.handleClick}>Hello {this.props.name}</button>);
  }
}

// export default ReactDOM.render(<HelloMessage name={name}/>, document.getElementById('react-root'));

export { HelloMessage };

// ReactDOM.render(<HelloMessage name='John' />, document.getElementById('react-root'))
// if (isNode) {
// exports.HelloMessage = HelloMessage
//   } else {
// ReactDOM.render(<HelloMessage name="John" />, document.getElementById('react-root'))
//   }