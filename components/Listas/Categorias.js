import React, { Component } from "react";
import { connect } from "react-redux";
import Link from "next/link";

class Categorias extends Component {
  render() {
    const { categorias } = this.props;
    // console.log(this.props); // ajuste
    return (
      <div className="categorias flex horizontal-mb">
        {
          categorias.map(categoria => (
            <Link href={`/category/${categoria.categoryName}?id=${categoria.categoryId}`} key={categoria.categoryId}>
              <div className="categoria-item flex-1 flex flex-center">
                <span className="text-center">{categoria.categoryName}</span>
              </div>
            </Link>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  categorias: state.categoria.categorias,
});

export default connect(mapStateToProps)(Categorias);
