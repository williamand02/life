import React, { useState, useEffect } from "react";

import "./style.css";
import imgCopo from "../../img/copo.svg";
import imgPrato from "../../img/prato.jpg";
import api from "../../services/api";

function IntelliMeal() {
  const message = "No maximo 7 ingredientes";
  const [carbo, setCarbo] = useState(0);
  const [protein, setProtein] = useState(0);
  const [vegie, setVegie] = useState(0);
  const [total, setTotal] = useState(0);
  const [weekday, setWeekday] = useState("segunda");
  const [dayMenu, setDayMenu] = useState("");
  const [marmita, setMarmita] = useState({});
  const [showMarmita, setShowMarmita] = useState(false);
  const [bebida, setBebida] = useState("");

  useEffect(() => {
    const { cardapioFixo, cardapioVariavel } = api;
    const menu = cardapioFixo.opcoes.concat(cardapioVariavel["segunda"].pratos);
    setBebida(cardapioVariavel["segunda"].bebida);
    setDayMenu(menu);
  }, []);

  function loadCardapio(dia) {
    const { cardapioFixo, cardapioVariavel } = api;
    const menu = cardapioFixo.opcoes.concat(cardapioVariavel[dia].pratos);
    setBebida(cardapioVariavel[dia].bebida);
    setDayMenu(menu);
  }
  function handleChange(event) {
    const { name, value } = event.target;
    let soma = total;
    if (name === "carbo" && value * 1 + protein * 1 + vegie * 1 <= 7) {
      soma = value * 1 + protein * 1 + vegie * 1;
      setCarbo(value);
    } else if (name === "protein" && carbo * 1 + value * 1 + vegie * 1 <= 7) {
      soma = carbo * 1 + value * 1 + vegie * 1;
      setProtein(value);
    } else if (name === "vegie" && carbo * 1 + protein * 1 + value * 1 <= 7) {
      soma = carbo * 1 + protein * 1 + value * 1;
      setVegie(value);
    }
    setShowMarmita(false);
    setTotal(soma);
  }

  function gerarMarmita(e) {
    e.preventDefault();
    const carb = sortiar(
      dayMenu.filter(el => el.classificacao === "CARBO"),
      carbo
    );
    const prot = sortiar(
      dayMenu.filter(el => el.classificacao === "PROTEIN"),
      protein
    );
    const vegi = sortiar(
      dayMenu.filter(el => el.classificacao === "VEGIE"),
      vegie
    );
    // console.log(carb, prot, vegi);
    setMarmita({ carb, prot, vegi });
    setShowMarmita(true);
  }

  function sortiar(array, qtd) {
    var novoArray = [];
    var indice_atual = array.length,
      valor_temporario,
      indice_aleatorio;
    while (0 !== qtd) {
      indice_aleatorio = Math.floor(Math.random() * indice_atual);
      indice_atual -= 1;
      qtd -= 1;
      valor_temporario = array[indice_atual];
      array[indice_atual] = array[indice_aleatorio];
      novoArray.push(array[indice_aleatorio]);
      array[indice_aleatorio] = valor_temporario;
    }

    return novoArray;
  }
  function handleDay(event) {
    const value = event.target.value;
    setWeekday(value);
    setShowMarmita(false);
    loadCardapio(value);
  }
  const Marmita = () => {
    if (showMarmita === true) {
      const C = marmita.carb.map((el, index) => (
        <p key={index}>{el.descricao}</p>
      ));
      const P = marmita.prot.map((el, index) => (
        <p key={index}>{el.descricao}</p>
      ));
      const V = marmita.vegi.map((el, index) => (
        <p key={index}>{el.descricao}</p>
      ));
      return (
        <div className="container-marmita lista">
          <div>
            <img src={imgPrato} alt="prato" />
          </div>
          <div>
            {C} {P} {V}
          </div>
        </div>
      );
    }
    return <div className="container-marmita" />;
  };
  return (
    <div id="corpo-Intelli">
      <div className="title-Intelli">
        <h2>IntelliMeal</h2>
      </div>
      <form>
        <div className="input-weekday">
          <label htmlFor="weekday"> Cardápio2 </label>
          <select id="weekday" value={weekday} onChange={handleDay}>
            <option value="segunda">segunda</option>
            <option value="terca">terca</option>
            <option value="quarta">quarta</option>
            <option value="quinta">quinta</option>
            <option value="sexta">sexta</option>
          </select>
        </div>
        <div className="input-bebida">
          <img src={imgCopo} alt="copo" />
          <p>{bebida}</p>
        </div>
        <div className="input-meal">
          <p className="title-input-meal">Quero uma refeição com</p>
          <div className="container-range">
            <input
              type="range"
              name="carbo"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={carbo}
            />
            <p className="range-number">{carbo}</p>
            <p className="range-text">Carbos</p>
          </div>
          <div className="container-range">
            <input
              type="range"
              name="protein"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={protein}
            />
            <p className="range-number">{protein}</p>
            <p className="range-text">Proteinas</p>
          </div>
          <div className="container-range">
            <input
              type="range"
              name="vegie"
              min="0"
              max="3"
              className="range-input"
              onChange={handleChange}
              value={vegie}
            />
            <p className="range-number">{vegie}</p>
            <p className="range-text">Vegetal</p>
          </div>
        </div>
        <p className="msg">{total >= 7 ? message : ""}</p>
        <div className="btn-center">
          <button onClick={gerarMarmita}>Gerar minha marmita</button>
        </div>
        <div className="marmita">
          <Marmita valor={marmita} exibir={showMarmita} />
        </div>
        {/* <p>{total}</p> */}
      </form>
    </div>
    // <li className="dev-item">
    //     <header>
    //         <img src={dev.avatar_url} alt={dev.name}></img>
    //         <div className="user-info">
    //             <strong>{dev.name || dev.github_username}</strong>
    //             <span>{dev.techs.join(', ')}</span>
    //         </div>
    //     </header>
    //     <p>{dev.bio}</p>
    //     <a href={`https://github.com/${dev.github_username}`}>Acessar perfil do GitHub</a>
    // </li>
  );
}
export default IntelliMeal;
//testando
