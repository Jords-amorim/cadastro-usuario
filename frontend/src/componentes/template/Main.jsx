import React from 'react'

// Importação Stylesheet
import './Main.css'
import Header from './Header'

// Definição Componente Funcional
export default props =>
    <React.Fragment>
        <Header/>
        <main className="content">
            Conteúdo
        </main>
    </React.Fragment>