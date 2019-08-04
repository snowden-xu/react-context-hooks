import React, { PureComponent } from "react";

class Book extends PureComponent {
  render() {
    const { name, price } = this.props;
    return (
      <div>
        <h3>{name}</h3>
        <p>{price}</p>
      </div>
    )
  }
}
export default Book;
