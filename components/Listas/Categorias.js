import React, { Component } from "react";
import Link from 'next/link';

class Categorias extends Component {
  state = {
    categorias: [
      { id: 1, nome: "Acessorios" },
      { id: 2, nome: "Teclado" },
      { id: 3, nome: "Mouse Gamer" },
      { id: 4, nome: "Mouse pad" },
      { id: 5, nome: "Webcam" }
    ]
  }

  render() {
    const { categorias } = this.state;
    return (
      <div className="categorias flex horizontal">
        {
          categorias.map(categoria => (
            <Link href={`/category/${categoria.nome}?id=${categoria.id}`}>
              <div className="categoria-item flex-1 flex flex-center">
                <span>{categoria.nome}</span>
              </div>
            </Link>
          ))
        }

      </div>
    )
  }

}

export default Categorias;