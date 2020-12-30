import React from 'react'

// Importação Dependência Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importação Dependência Font-awesome
import 'font-awesome/css/font-awesome.min.css'

// Importação Stylesheet
import './App.css'

// Importação Componentes
import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Main from '../componentes/template/Main'
import Footer from '../componentes/template/Footer'

// Definição Componente Funcional (sem estado)
export default props =>
    <div className="app">
        <Logo/>
        <Nav/>
        <Main icon= "home" title= "Início"
        subtitle=" Projeto em React" >
            <div className="display-4"> Bem Vindo</div>
            <hr/>
            <p className="mb-0">Sistema para exeplificar a construção de um cadastro Desenvolvido em React</p>
        </ Main>    
        <Footer/>
    </div>


