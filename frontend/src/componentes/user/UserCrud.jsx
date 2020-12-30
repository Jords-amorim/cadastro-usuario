 import React,{ Component } from 'react'

// Importação dependência AXIOS
import axios from 'axios'

// Importação Stylesheet
// import '../template/Main.css'

 //Importação Componentes
 import Header from '../template/Header'
 import Main from '../template/Main'

// Criação objeto 
// Vamos passar as propriedades para o componente
 const headerProps = {
     icon: 'users',
     title: 'Usuários',
     subtitle: 'Cadastro de Usuários: Incluir, Listas, Alterar e Excluir'
 }

// Estado Inicial
 const baseUrl = 'http://localhost:3001/users'
 const initialState = {
     user: { name: '', email: ''},
     list: []
 }

//Componente de classe
export default class UserCrud extends Component {
    
     state = {...initialState }

     clear() {
         this.setState({ user: initialState.user})
     }

     save(){
         const user = this.state.user
         const method = user.id ? 'put' : 'post' 
         const url = user.id ? `${baseUrl}/${user.id}` : baseUrl
         axios[method](url, user)
             .then(resp => {
                const list = this.getUpdatedList(resp.data)
                 this.setState({user: initialState.user, list})
             })
     }

     getUpdatedList(user) {
         const list = this.state.list.filter(u => u.id !== user.id)
         list.unshift(user)
         return list
     }

     upDateField(event){
         const user = {...this.state.user}
         user[event.target.name] = event.target.value
         this.setState({user})
     }

    // Jsx renderiza o Formulário
    // Padrão bootstrap de formulário
     renderForm(){
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

                
                 <hr/>
                
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

     render(){
         return (
             <>
             <Main {...headerProps}>
                {this.renderForm()}
                                
            </Main>
                                
             </>

         )
     }
        

 }

