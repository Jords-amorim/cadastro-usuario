import React from 'react'

// Importação Stylesheet
import './Nav.css'

// Definição Componente Funcional
export default props =>
    <aside className="menu-area">
        <nav className="menu">
            {/* Refatorar para navitems  */}
            <a href="#/" className="fa fa-home" >  Início </a>
            <a href="#/users" className="fa fa-users"> Usuários </a>
            
        </nav>
    </aside>