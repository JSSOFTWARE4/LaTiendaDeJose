import {Fragment} from "react";


export const App = () =>{
    return (
    <Fragment>


    <div class="container text-center">
    <div class="row align-items-start px-4 mt-4">
        
        <nav class="navbar navbar-expand-lg bg-light">

        <div class="container-fluid">

            <a class="navbar-brand" href="#">
                <img src= {require('./img/LogJosé.png')} alt="Logo Tienda José" width="30" height="24"></img>
            </a>

            <a class="navbar-brand" href="#">Tienda José</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-link" href="#">Lista de Productos</a>
                <a class="nav-link" href="#">Modificar Productos</a>
                <a class="nav-link disabled">Lista Ventas</a>
            </div>
            </div>
        </div>
        </nav>

        <table class="table table-striped table-hover">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Fecha</th>
            <th scope="col">Id de Venta</th>
            <th scope="col">Valor</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>21/10/2022</td>
            <td>4593-15</td>
            <td>50.000</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>22/10/22</td>
            <td>4594-15</td>
            <td>125.000</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td>22/10/23</td>
            <td>4595-15</td>
            <td>23.900</td>
            </tr>
            <tr>
            <th scope="row" colspan="3">Total</th>
            <td>198.900</td>
            </tr>
        </tbody>
        </table>

    </div>
    
    </div>




    </Fragment>)
}

function Activar(){
    alert ("El boton ha sido activado")
}