import burchetta from '../../public/img/bruchetta.svg';
import greekSalad from '../../public/img/greekSalad.jpg';
import lemonDessert from '../../public/img/lemonDessert.jpg';
import iconSecTow from '../../public/icon/secTow.svg';
import { Link } from 'react-router-dom';

function SectionTow() {

  const specials = [
    {
      id: 1, title: "Greek Salad",
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons." ,
      price: "$12.99",
      img: greekSalad
    },
    {
      id: 2, title: "Bruschetta",
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil." ,
      price: "$5.99",
      img: burchetta
    },
    {
      id: 3, title: "Lemon Dessert",
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined." ,
      price: "$4.99",
      img: lemonDessert
    }
  ];
const specialItems = specials.map((item) => (
  <div key={item.id} className={"cardSecTow"}>
    <img src={item.img} alt={item.title} className='imgCardSecTow' />
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "0px 15px"
    }}>
      <h2>{item.title}</h2>
      <p>{item.price}</p>
    </div>
    <p style={{padding: "0px 15px"}} className='disSecTow'>{item.description}</p>
    <div style={{
      padding: "0px 15px",
      paddingBottom: "15px",
      display: "flex",
      alignItems: "center",
      }}>
      <Link className={"buttonSecTow"} to="/Reservations">
        Order a delivery
      </Link>
      <img src={iconSecTow} alt="Icon" />
    </div>
  </div>
));

return (
  <section className={"secTow"}>
    <div className={"titleSecTow"}>
      <h1>This Weeks Specials!</h1>
      <button className={"button"}>Online Menu</button>
    </div>
    <div>
        <p className={"paraghSecTow"}>Check out our special offers for this week!</p>
     </div>
      <div className={"contCardsSecTow"}>
        {specialItems}
      </div>
    </section>
  )
}

export default SectionTow;