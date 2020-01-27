// import axios from 'axios';

// const api = axios.create({ baseURL: 'https://dev-superon-public-media.s3-sa-east-1.amazonaws.com/' });
// const api = axios.create({baseURL:'https://rocketseat-node.herokuapp.com/api'});
const api = ({
    "cardapioFixo": {
      "opcoes": [
        { "descricao": "Arroz branco tradicional", "classificacao": "CARBO" },
        { "descricao": "Arroz com linguiça", "classificacao": "CARBO" },
        { "descricao": "Spaguetti carbonara", "classificacao": "CARBO" },
        { "descricao": "Vagem", "classificacao": "VEGIE" },
        { "descricao": "Tomate", "classificacao": "VEGIE" },
        { "descricao": "Rúcula", "classificacao": "VEGIE" },
        { "descricao": "Couve-Flor", "classificacao": "VEGIE" },
        { "descricao": "Cenoura", "classificacao": "VEGIE" },
        { "descricao": "Alface", "classificacao": "VEGIE" },
        { "descricao": "Repolho", "classificacao": "VEGIE" },
        { "descricao": "Churrasco", "classificacao": "PROTEIN" },
        { "descricao": "Linguiça", "classificacao": "PROTEIN" },
        { "descricao": "Peito de Frango", "classificacao": "PROTEIN" }
      ]
    },
    "cardapioVariavel": {
      "segunda": {
        "aberto": true,
        "pratos": [
          { "descricao": "Macarrão ao alho e óleo", "classificacao": "CARBO" },
          { "descricao": "Cenoura com alho poró", "classificacao": "VEGIE" },
          { "descricao": "Manga", "classificacao": "VEGIE" },
          { "descricao": "Coração de frango", "classificacao": "PROTEIN" }
        ],
        "bebida": "Suco de laranja"
      },
      "terca": {
        "aberto": true,
        "pratos": [
          { "descricao": "Mandioca Frita", "classificacao": "CARBO" },
          { "descricao": "Salada Americana", "classificacao": "VEGIE" },
          { "descricao": "Salada picante", "classificacao": "VEGIE" },
          { "descricao": "Omelete", "classificacao": "PROTEIN" }
        ],
        "bebida": "Sprite Lata"
      },
      "quarta": {
        "aberto": true,
        "pratos": [
          { "descricao": "Arroz com Nozes", "classificacao": "CARBO" },
          { "descricao": "Quixe Vegano", "classificacao": "VEGIE" },
          { "descricao": "Salada de Grao de Bico", "classificacao": "VEGIE" },
          { "descricao": "Picanha no Alho", "classificacao": "PROTEIN" }
        ],
        "bebida": "Suco de Abacaxi"
      },
      "quinta": {
        "aberto": true,
        "pratos": [
          { "descricao": "Macarrão Aglio i Calabresa", "classificacao": "CARBO" },
          { "descricao": "Salada picante", "classificacao": "VEGIE" },
          { "descricao": "Peito de Frango Recheado", "classificacao": "PROTEIN" }
        ],
        "bebida": "Suco de Uva"
      },
      "sexta": {
        "aberto": true,
        "pratos": [
          { "descricao": "Salada Americana", "classificacao": "VEGIE" },
          { "descricao": "Coração de frango", "classificacao": "PROTEIN" },
          { "descricao": "Tabule", "classificacao": "VEGIE" },
          { "descricao": "Lasanha", "classificacao": "PROTEIN" }
        ],
        "bebida": "Coca em Lata"
      },
      "sabado": {
        "aberto": false
      },
      "domingo": {
        "aberto": false
      }
    }
  });
export default api;