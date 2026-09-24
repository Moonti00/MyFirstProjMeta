import { Link } from "react-router-dom";
import resfood from '../../public/img/restauranfood.jpg';

function SectionOne() {

  return (
    <section className={"secOne"}>
      <div className={"insideSecOne"}>
        <div>
        <h1>Little Lemon</h1>
        <p>Chicago</p>
        </div>
        <p>We are a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/Reservations">
          <button className={"button"}>Reserve a Table</button>
        </Link>
      </div>
      <img src={resfood} alt="Restaurant Food" />
    </section>
  )
}

export default SectionOne;