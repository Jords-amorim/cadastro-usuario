import React from 'react'
import { BrowserRouter } from 'react-router-dom'

// Importação Dependência Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

// Importação Dependência Font-awesome
import 'font-awesome/css/font-awesome.min.css'

// Importação Stylesheet
import './App.css'

// Importação Componentes
import Logo from '../componentes/template/Logo'
import Nav from '../componentes/template/Nav'
import Routes from './Routes'
import Footer from '../componentes/template/Footer'


// Definição Componente Funcional (sem estado)
export default props =>
    <BrowserRouter>
        <div className="app">
            <Logo />
            <Nav />
            <Routes />
            <Footer />
        </div>
    </BrowserRouter>


