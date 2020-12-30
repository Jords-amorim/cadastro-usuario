import React from 'react'

// Importação Stylesheet
import './Main.css'
import Header from './Header'

// Definição Componente Funcional
export default props =>
    <React.Fragment>
        <Header {...props}/>
        <main className="content container-fluid ">
            <div className="p-3 mt-3">
                {props.children}

            </div>
        </main>
    </React.Fragment>