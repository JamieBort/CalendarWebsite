import React from 'react';
import Link from '../components/Link';

export default class Header extends React.Component {
  render(props) {
    return <div>
      <p>Hello from inside Header.</p>
    <Link name="link"></Link>
    </div>;
  }
}