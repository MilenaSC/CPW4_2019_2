import axios from 'axios';
import itens from './itens'

export default class ListaService {

    constructor() {
        this.listas = [];
        this.api = axios.create({
            baseURL: 'https://secret-plateau-95576.herokuapp.com/listas'
        });
    }

    async recuperarListas() {
        let resposta = await this.api.get('/');
        this.listas = resposta.data;
        return this.listas;
    }

    async salvar(lista) {
        await this.api.post('/', lista);
    }


    recuperarItens(termo){
        termo = termo.toLowerCase();
        return itens.filter(item =>{
            let descricao = item.descricao.toLowerCase
            return descricao.includes(termo)
        })

    }
}


