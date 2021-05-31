import React from 'react';
import Header from '../components/Header';
import BasicFunction from '../components/BasicFunction';

export default class about extends React.Component {
  render() {
    return <div>
      <Header></Header>
      <p>Hello from inside about.js.</p>
      <p>My NAME is {this.props.name}.</p>
      <BasicFunction name="ooooo"></BasicFunction>
      <BasicFunction name={this.props.name}></BasicFunction>
    </div>;
  }
}