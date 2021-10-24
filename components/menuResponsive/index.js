import React, { Component } from "react";
import Link from "next/link";

class MenuResposive extends Component {
  state = {};

  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <div className="menu-responsive">
        <div>
          <Link href="/customer-area">
            <i className="fa fa-bars"></i>
          </Link>
        </div>
      </div>
    );
  }
}

export default MenuResposive;
