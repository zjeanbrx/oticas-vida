import React from "react";

export default function Produtos() {
  return (
    <div className="produtos-secao">
      <div className="screen-width">
        <div className="sn20">
          <h2 id="produtos">NOSSOS PRODUTOS</h2>
          <p>
            Trabalhamos com óculos de grau, óculos de sol, lentes transition nos
            modelos masculino, feminino e infantil.
          </p>
          <p>
            Todos os nossos produtos são acessíveis e contam com a melhor
            qualidade do mercado.
          </p>
        </div>
        <div className="produtos">
          <div className="produto">
            <h3>Óculos de grau</h3>
            <div>
              <img src="assets/imagens/oculos01.png" alt="óculos de grau" />
            </div>
            <h4>R$ 500,00</h4>
          </div>
          <div className="produto">
            <h3>Óculos transition</h3>
            <div>
              <img src="assets/imagens/oculos02.png" alt="óculos transition" />
            </div>
            <h4>R$ 700,00</h4>
          </div>
          <div className="produto">
            <h3>Óculos de sol</h3>
            <div>
              <img src="assets/imagens/oculos03.png" alt="óculos de sol" />
            </div>
            <h4>R$ 750,00</h4>
          </div>
          <div className="produto">
            <h3>Óculos infantil</h3>
            <div>
              <img src="assets/imagens/oculos04.png" alt="óculos infantil" />
            </div>
            <h4>R$ 500,00</h4>
          </div>
        </div>
        <div className="sn20">
          <p>Todos os nossos produtos incluem:</p>
          <ul>
            <li>Garantia de 1 ano</li>
            <li>Manutenção preventiva</li>
            <li>Descontos especiais na compra da segunda unidade</li>
            <li>Flexibilidade de pagamento</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
