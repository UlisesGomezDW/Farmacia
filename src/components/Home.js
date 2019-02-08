import React from 'react'
//cree una función
const Home = () => {
    return(
        <div className="component-container">
            <h1>
                Bienvenidos
            </h1>
            <img className="component-img" src="https://institutodyn.com/wp-content/uploads/auxiliar-de-farmacia-auxiliar-de-parafarmacia.jpg" alt="no cargo la img"/>
        </div>
    )
}
// aquí exporto mi home para que otros componentes puedan usarlo
export default Home