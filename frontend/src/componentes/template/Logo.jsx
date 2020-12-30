import React from 'react'

// Importação Ilustração
import logo from '../../assets/img/logo-png.png'
//Importação Stylesheet
import './Logo.css'

//Definição Componente Funcional
export default props =>
    <aside className="logo">
        <a href="/" className="logo">
            <img src={logo} alt="Ilustração logo"/>
        </a>
    </aside>
