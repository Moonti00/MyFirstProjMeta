import { Link } from "react-router-dom";
import resfood from '../../public/img/restauranfood.jpg';

function SectionOne() {

  return (
    <section>
      <div>
        <h1>Little Lemon</h1>
        <i>Chicago</i>
        <p>We are a family-owned restaurant, focused on traditional recipes served with a modern twist.</p>
        <Link to="/Reservations">
          <button>Reserve a Table</button>
        </Link>
      </div>
      <img src={resfood} alt="Restaurant Food" />
    </section>
  )
}

export default SectionOne;