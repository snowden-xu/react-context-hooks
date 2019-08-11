import React, { useContext, PureComponent } from 'react';
import { BookContext } from '../context/BookContext';

function Nav() {
  const { books } = useContext(BookContext);

  return <NavDetail name="snowden书架" num={books.length} />;
}

class NavDetail extends PureComponent {
  render() {
    return (
      <nav>
        <h3 className="222">{this.props.name}</h3>
        <p>书本列表: {this.props.num}</p>
      </nav>
    );
  }
}

export default Nav;
