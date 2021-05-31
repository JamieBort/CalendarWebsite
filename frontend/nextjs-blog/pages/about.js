import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import BasicFunction from '../components/BasicFunction';

export default class about extends React.Component {
  render() {
    return <div>
      <p>Hello from inside about.js.</p>
      <Header name="about.js"></Header>
      <Body secondName="abc" name="about.js"></Body>
      {/* <Body name = "about.js"></Body> */}
    </div>;
  }
}