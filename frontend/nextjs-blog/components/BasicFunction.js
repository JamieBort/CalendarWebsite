import React from 'react';

export default class BasicFunction extends React.Component {
  render() {
    return <div>
      <p>Hello from inside basic_function.</p>
      <p>My name is {this.props.name}.</p>
    </div>;
  }
}