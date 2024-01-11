import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import 'animate.css';
const HeroCard = ({
  id,
  superhero,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="container animate__animated animate__fadeIn my-4">
      <div className="card">
        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={`/assets/heroes/${id}.jpg`}
              className="card-img"
              alt={superhero}
            />
          </div>

          <div className="col-8">
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              {alter_ego !== characters && <p>{characters}</p>}
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>More..</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
HeroCard.propTypes = {
  id: PropTypes.string.isRequired,
  superhero: PropTypes.string.isRequired,
  alter_ego: PropTypes.string.isRequired,
  first_appearance: PropTypes.string.isRequired,
  characters: PropTypes.string.isRequired,
};

export default HeroCard;
