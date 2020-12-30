import React from 'react'
import {Link} from 'react-router-dom'

// Importação Ilustração
import logo from '../../assets/img/logo-png.png'
//Importação Stylesheet
import './Logo.css'

//Definição Componente Funcional
export default props =>
    <aside className="logo">
        <Link to="/" clLinkssName="logo">
            <img src={logo} alt="Ilustração logo"/>
        </Link>
    </aside>
