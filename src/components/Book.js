import React, { PureComponent } from 'react';

class Book extends PureComponent {
  render() {
    const { name, price } = this.props;

    return (
      <div>
        <h4 className="title">{name}</h4>
        <p>{price}</p>
      </div>
    );
  }
}
export default Book;
