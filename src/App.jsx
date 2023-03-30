function App(){
   return (
    <div className="container text-center">
      <div className="row">
        <div className="col">
      <h1>Shoppin List</h1>
      <hr />
      </div>
      </div>
      <div className="row">
        <div className="col-1">
          <input type="checkbox" />
      </div>
      <div className="col text-start">
      1 kg
      </div>
        <div className="col-5 col-md-7 text-start ">
          Tortillas
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm">
        <button className="btn btn-outline-primary">
        < i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
        </button>
      </div>
    </div>

    <div className="row">
        <div className="col-1">
          <input type="checkbox" />
      </div>
      <div className="col text-start">
      1 lt
      </div>
        <div className="col-5 col-md-7 text-start">
          Aceite
      </div>
      <div className="col-4 col-md-3 btn-group btn-group-sm text-end">
        <button className="btn btn-outline-primary">
        < i className="bi bi-pencil-square"></i>
        </button>
        <button className="btn btn-outline-danger">
          <i className="bi bi-trash2-fill"></i>
        </button>
      </div>
    </div>


  </div> 
   )
}

export default App