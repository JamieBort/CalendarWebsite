import React from 'react';
import Link from '../components/Link';

export default class Header extends React.Component {
  render(props) {
    return <div>
      <p>The Header inside of {this.props.name}</p>
    <Link name="link"></Link>
    </div>;
  }
}