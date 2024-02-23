import React from "react";

export default function Header() {
    return (
        <header>
            <div className="screen-width">
                <div className="logo">
                    <img src="assets/imagens/logo.png" alt="logo"/>
                </div>
                <div className="nav">
                    <a href="#produtos"><p>PRODUTOS</p></a>
                    <a href="#sobre"><p>SOBRE</p></a>
                    <a href="#contato"><p>CONTATO</p></a>
                </div>
            </div>
            <div className="nav-mobile">
                <a href="#produtos"><p>PRODUTOS</p></a>
                <a href="#sobre"><p>SOBRE</p></a>
                <a href="#contato"><p>CONTATO</p></a>
            </div>
        </header>
    )
}