import { useForm } from "../hooks/useForm";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import HeroCard from "../components/HeroCard";
import { getHeroByName } from "../helpers/getHeroByName";

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);
  const heroes = getHeroByName(q);

  const showError = q.length > 0 && heroes.length === 0;
  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`?q= ${searchText}`);
  };

  return (
    <div className="container pt-5">
      <h4 className=" py-3">Search</h4>

      <div className="row">
        <div className="col-5">
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <br />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          <div
            className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: showError ? "" : "none" }}
          >
            No comic: {q}
          </div>

          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero}/>
          ))}.
        </div>
      </div>
    </div>
  );
};
