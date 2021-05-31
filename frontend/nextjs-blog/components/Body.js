import React from 'react';
import BasicFunction from './BasicFunction';

export default class Body extends React.Component {
  render() {
    return <div>
    <p>The Body inside of {this.props.name}</p>
    <BasicFunction test={this.props.name}></BasicFunction>
      {/* <BasicFunction name="ooooo"></BasicFunction> */}
      {/* <BasicFunction name={this.props.name}></BasicFunction>
      <BasicFunction secondName={this.props.secondName}></BasicFunction> */}
      </div>;
  }
}