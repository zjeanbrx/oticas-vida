import React from "react";

export default function Contato() {
  return (
    <div className="contatos-secao">
      <div className="screen-width">
        <div className="sn20">
          <h2 id="contato">FALE CONOSCO</h2>
          <p>
            Não perca tempo, venha conhecer uma de nossas lojas ou entre em
            contato através de nossas redes sociais ou da central de
            atendimento.
          </p>
        </div>
        <div className="contatos">
          <div>
            <div>
              <p>
                <span>Contato</span>
              </p>
            </div>
            <div>
              <div>
                <img src="/assets/imagens/local.png" alt="local" />
                <p>Nova Iguaçu, RJ</p>
              </div>
              <div>
                <img src="/assets/imagens/telefone.png" alt="telefone" />
                <p>(21) 9999-9999</p>
              </div>
              <div>
                <img src="/assets/imagens/email.png" alt="email" />
                <p>contato@oticasvida.com</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <p>
                <span>Nossas Redes Sociais</span>
              </p>
            </div>
            <div>
              <div>
                <img src="/assets/imagens/fb.png" alt="facebook" />
                <p>/Oticasvida</p>
              </div>
              <div>
                <img src="/assets/imagens/ig.png" alt="instagram" />
                <p>@oticasvidarj</p>
              </div>
              <div>
                <img src="/assets/imagens/tt.png" alt="X / twitter" />
                <p>@oticasvidarj</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
