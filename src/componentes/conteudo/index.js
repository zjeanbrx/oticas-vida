import React from "react";
import Banner from "./banner/";
import Produtos from "./produtos/";
import Sobre from "./sobre/";
import Contato from "./contato/";

export default function Conteudo() {
    return (
        <div className="conteudo">
            <Banner/>
            <Produtos/>
            <Sobre/>
            <Contato/>
        </div>
    )
}