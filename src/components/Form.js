
function Form({
  lugar,
  precio,
  tamanio,
  estadoInicial,
  actualizarLugar,
  actualizarPrecio,
  actualizarTamanio,
  actualizarFechaDesde,
  actualizarFechaHasta
}) {
  const cambiarFechaDesde = (e) => {
    actualizarFechaDesde(e.target.value);
  };

  const cambiarFechaHasta = (e) => {
    actualizarFechaHasta(e.target.value);
  };

  const cambiarLugar = (e) => {
    actualizarLugar(e.target.value);
  };
  const cambiarPrecio = (e) => {
    actualizarPrecio(e.target.value);
  };
  const cambiarTamanio = (e) => {
    actualizarTamanio(e.target.value);
  };

  const resetearFormulario = (e) => {
    e.preventDefault();
    actualizarFechaDesde(estadoInicial.desde);
    actualizarFechaHasta(estadoInicial.hasta);
    actualizarLugar(estadoInicial.lugar);
    actualizarPrecio(estadoInicial.precio);
    actualizarTamanio(estadoInicial.tamanio);
  };

  return (
    <>
      <form action="" id="form">
        <nav className="nav-bar">
          <div className="div-filter">
            <input
              value={estadoInicial.actualizarFechaInicio}
              type="date"
              className="input"
              onChange={cambiarFechaDesde}
            />
            
          </div>
          <div className="div-filter">
            <input type="date" className="input" onChange={cambiarFechaHasta} />
            
          </div>
          <div className="div-filter">
            <select
              value={lugar}
              className="select"
              name="country"
              id=""
              onChange={cambiarLugar}
            >
              <option value={estadoInicial.lugar}>{estadoInicial.lugar}</option>
              <option value="argentina">Argentina</option>
              <option value="brasil">Brasil</option>
              <option value="chile">Chile</option>
              <option value="uruguay">Uruguay</option>
            </select>
           
          </div>
          <div className="div-filter">
            <select
              value={precio}
              className="select"
              name="price"
              id=""
              onChange={cambiarPrecio}
            >
              <option value={estadoInicial.precio}>
                {estadoInicial.precio}
              </option>
              <option value="1">$</option>
              <option value="2">$$</option>
              <option value="3">$$$</option>
              <option value="4">$$$$</option>
            </select>
            
          </div>
          <div className="div-filter">
            <select
              value={tamanio}
              className="select"
              name="size"
              id=""
              onChange={cambiarTamanio}
            >
              <option value={estadoInicial.tamanio}>
                {estadoInicial.tamanio}
              </option>
              <option value="pequenio">Pequeño</option>
              <option value="mediano">Mediano</option>
              <option value="grande">Grande</option>
            </select>
            
          </div>
          <button onClick={resetearFormulario}></button>
        </nav>
      </form>
    </>
  );
}

export default Form;
