import React, { Component } from "react";
import Link from 'next/link';

class Categorias extends Component {
  state = {
    categorias: [
      { id: 1, nome: "Acessorios" },
      { id: 2, nome: "Tenis" },
      { id: 3, nome: "Camisetas" },
      { id: 4, nome: "Shorts" },
      { id: 5, nome: "Moletom" }
    ]
  }

  render() {
    const { categorias } = this.state;
    return (
      <div className="categorias flex horizontal-mb">
        {
          categorias.map(categoria => (
            <Link href={`/category/${categoria.nome}?id=${categoria.id}`}>
              <div className="categoria-item flex-1 flex flex-center">
                <span className="text-center">{categoria.nome}</span>
              </div>
            </Link>
          ))
        }

      </div>
    )
  };

};

export default Categorias;