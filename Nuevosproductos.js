import logo from "./logotienda.png";
import "./App.css";

function Nuevosproductos() {
  return (

    <div class="table-responsive">
      <img
        src={logo}
        alt="logo"
        style={{ position: "fixed", left: "25px", padding: "5px" }}
      />
      <h1 style={{ position: "fixed", top: "135px", padding: "5px" }}>
        Ingreso de nuevos productos
      </h1>
      <table
        class="table table-hover"
        style={{ position: "fixed", top: "200px" }}
      >
        <thead class="table-primary">
          <tr>
            <th>Id</th>
            <th>Descripcion</th>
            <th>Unidad</th>
            <th>Clasificacion</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light">
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr class="table-light">
          <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
          <tr class="table-light">
          <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
            <td>
              <input></input>
            </td>
          </tr>
         
        </tbody>
      </table>
      <button 
      style={{position: "fixed", bottom: "20px", right: "20px"}}
      type="button" class="btn btn-primary btn-lg">
        Guardar Producto
      </button>
    </div>
  );
}

export default Nuevosproductos;
