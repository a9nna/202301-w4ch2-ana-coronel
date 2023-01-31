import ErrorDisplay from "./components/ErrorDisplay/ErrorDisplay";
import ImageDisplay from "./components/ImageDisplay/ImageDisplay";

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
          <ImageDisplay />
        </div>
      </div>
      <div className="row">
        <ErrorDisplay />
      </div>
    </div>
  );
};

export default App;
