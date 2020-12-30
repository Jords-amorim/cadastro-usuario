import React from 'react'
import { Link } from 'react-router-dom'

// Importação Stylesheet
import './Nav.css'

// Definição Componente Funcional
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar para navitems  */}
            <Link to="/" className="fa fa-home" >  Início </Link>
            <Link to="/users" className="fa fa-users"> Usuários </Link>

        </nav>
    </aside>