import React from "react";

export default function Sobre() {
    return (
        <div className="sobre-secao" id="sobre">
            <div className="screen-width">
                <div className="sn20">
                    <h2>QUEM SOMOS NÓS?</h2>
                    <p>Fundada em 2021, em Nova Iguaçu - Rio de Janeiro, a Óticas Vida iniciou suas atividades focada no atendimento ao público de renda mais baixa, sempre com o objetivo de proporcionar ao cliente bom atendimento, qualidade e preço baixo.</p>
                </div>
                <div className="sobre-cards">
                    <div className="card">
                        <div><img src="/assets/imagens/loja.png" alt=""/></div>
                        <div>
                            <h3>NOSSAS FILIAIS</h3>
                            <p>Hoje temos mais de 20 filiais pelo Brasil e na América</p>
                        </div>
                    </div>
                    <div className="card">
                        <div><img src="/assets/imagens/atendimento.png" alt=""/></div>
                        <div>
                            <h3>ATENDIMENTO FLEXÍVEL</h3>
                            <p>Nossa equipe é treinada pra te atender</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}