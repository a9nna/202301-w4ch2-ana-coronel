const App = () => {
  return (
    <div className="container">
      <form className="search-form">
        <div className="row">
          <label htmlFor="search" className="col-1 col-form-label">
            Search:{" "}
          </label>
          <div className="col-4">
            <input type="text" id="search" className="search form-control" />
          </div>
          <button type="submit" className="btn btn-info btn-sm col-1">
            Go
          </button>
        </div>
      </form>
      <div className="row">
        <div className="container-gif offset-1 col-6">
          <img src="" alt="" className="gif" />
        </div>
      </div>
      <div className="row">
        <p className="error text-danger col">
          Error: I couldn't retrieve anything funny
        </p>
      </div>
    </div>
  );
};

export default App;
