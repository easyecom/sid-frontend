import React, { Component } from "react";
import Link from "next/link";
import { connect } from "react-redux";
import actions from "../../redux/actions";
import { fetchClient } from "../../redux/actions/clientActions";
import { getToken } from "../../utils/token";
import axios from "axios";
import { API, loja } from "../../config";
import { getHeaders } from "../../redux/actions/helpers";

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
    userName: "",
  };

  async componentDidMount() {
    const token = getToken();
    if (token) {
      try {
        const { data } = await axios.get(
          `${API}/stores/${loja}/clients/me`,
          getHeaders(token)
        );
        if (data) {
          this.setState({ userName: data.userName });
        }
      } catch (e) {
        throw e;
      }
    }
  }

  componentDidUpdate() {}

  toggleOpen = async () => {
    this.setState({ open: !this.state.open });
  };

  handleMenuResponsive() {
    return (
      <div className="Menu-responsive">
        <div className="Header-menu-responsive">
          <div className="header-menu-responsive">
            {this.state.userName ? (
              <p>
                <span className="login-responsive">{`Olá ${this.state.userName.toUpperCase()}`}</span>
              </p>
            ) : (
              <p>
                <Link href="/customer-area">
                  <span className="login-responsive">Entrar</span>
                </Link>
              </p>
            )}
            <p onClick={() => this.toggleOpen()}>
              <i className="fa fa-angle-left"></i>
            </p>
          </div>
          <div className="my-orders-responsive">
            <p>
              <Link href="/customer-area">
                <span className="login-responsive">Meus pedidos</span>
              </Link>
            </p>
          </div>
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
