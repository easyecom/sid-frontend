import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import actions from "../../redux/actions";

const categories = [
  {
    category: "vestuarios",
    categories: [
      { categoryChildren: "camisetas" },
      { categoryChildren: "blusas" },
      { categoryChildren: "bermudas" },
      { categoryChildren: "calças" },
    ],
  },
  {
    category: "calcados",
    categories: [
      { categoryChildren: "tenis" },
      { categoryChildren: "sapatos" },
      { categoryChildren: "botinhas" },
      { categoryChildren: "chinelos" },
    ],
  },
  {
    category: "acessorios",
    categories: [
      { categoryChildren: "relogios" },
      { categoryChildren: "bones" },
      { categoryChildren: "correntes" },
      { categoryChildren: "perfumes" },
    ],
  },
  {
    category: "eletronicos",
    categories: [
      { categoryChildren: "celulares" },
      { categoryChildren: "smartWatch" },
      { categoryChildren: "carregadores" },
    ],
  },
];

class MenuResposive extends Component {
  state = {
    open: false,
  };

  componentDidMount() {}

  componentDidUpdate() {}

  toggleOpen = () => this.setState({ open: !this.state.open });

  handleMenuResponsive() {
    console.log(this.props, "props");
    return (
      <div className="Menu-responsive">
        <div className="header-menu-responsive">
          <p>
            <Link href="/customer-area">
              <span className="login-responsive">Entre</span>
            </Link>{" "}
            ou{" "}
            <Link href="/customer-area">
              <span
                onClick={this.props.changeAcesso}
                className="register-responsive"
              >
                cadastre-se
              </span>
            </Link>
          </p>

          <p onClick={() => this.toggleOpen()}>
            <i className="fa fa-angle-left"></i>
          </p>
        </div>

        <h3 className="categories">Categorias</h3>
        <div className="categories">
          {categories.map((e) => (
            <div>{e.category}</div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { open } = this.state;

    return (
      <div className="menu-responsive">
        <div>
          {open ? this.handleMenuResponsive() : ""}
          <div onClick={() => this.toggleOpen()}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(MenuResposive);
