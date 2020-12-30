import React, { Component } from 'react'

// Importação dependência AXIOS
import axios from 'axios'

// Importação Stylesheet
// import '../template/Main.css'

//Importação Componentes
import Main from '../template/Main'

// Criação objeto 
const headerProps = {
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de Usuários: Incluir, Listas, Alterar e Excluir'
}

// Estado Inicial
const baseUrl = 'http://localhost:3001/users'
const initialState = {
    user: { name: '', email: '' },
    list: []
}

//Componente de classe
export default class UserCrud extends Component {

    state = {...initialState }
    
    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({list: resp.data})
        })

    }

    clear() {
        this.setState({ user: initialState.user })
    }

    save() {
        const user = this.state.user
        const method = user.id ? 'put' : 'post'
        const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
        axios[method](url, user)
            .then(resp => {
                const list = this.getUpdatedList(resp.data)
                this.setState({ user: initialState.user, list })
            })
    }

    getUpdatedList(user, add = true) {
        const list = this.state.list.filter(u => u.id !== user.id)
        if(user) list.unshift(user)
        return list
    }

    upDateField(event) {
        const user = { ...this.state.user }
        user[event.target.name] = event.target.value
        this.setState({ user })
    }

    // Jsx renderiza o Formulário
    // Padrão bootstrap de formulário
    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    {/* Elemento input nome */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control"
                                name="name"
                                value={this.state.user.name}
                                onChange={e => this.upDateField(e)}
                                placeholder="Digite o nome" />
                        </div>
                    </div>
                    {/* Elemento input e-mail */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>E-mail</label>
                            <input type="text" className="form-control"
                                name="email"
                                value={this.state.user.email}
                                onChange={e => this.upDateField(e)}
                                placeholder="Digite o e-mail" />
                        </div>
                    </div>
                </div>


                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">

                        <button className="btn btn-primary"
                            onClick={e => this.save(e)} >
                            Salvar
                         </button>

                        <button className="btn btn-secondary ml-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                          </button>
                    </div>
                </div>
            </div>
        )
    }

    // Carrega o usuário quando for alterar
    load(user) {
        this.setState({user})
    }

    // Remove o usuário da lista e backend
    remove(user) {
        axios.delete(`${baseUrl}/${user.id}`).then(resp =>{
            const list = this.getUpdatedList(user, false)
            this.setState({list})
        })
    }

    // Renderiza uma tabela
    renderTable() {
        return(
            <table className="table mt-4">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows(){
        return this.state.list.map( user => {
            return (
                <tr key={user.id} >
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email} </td>
                    <td>
                        <button className="btn btn-warnig"
                        onClick={()=> this.load(user)} >
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                        onClick={() => this.remove(user)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>

                </tr>
            )
        }

        )

    }


    render() {        
        return (
            <>
                <Main {...headerProps}>
                    {this.renderForm()}
                    {this.renderTable()}
                </Main>

            </>

        )
    }


}

