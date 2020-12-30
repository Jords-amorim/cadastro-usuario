import React from 'react'

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
        <Main/>
        <Footer/>
    </div>


