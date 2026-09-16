import imgOne from '../../public/img/MarioAndAdrianA.jpg';
import imgTow from '../../public/img/MarioAndAdrianB.jpg';
import imgThree from '../../public/img/restaurant.jpg';
import imgFour from '../../public/img/restaurantChefB.jpg';

function SectionFour() {

  return (
    <>
    <section id="about">
      <div>
        <h1>Little Lemon</h1>
        <h3>Chicago</h3>
        <p>Little Lemon Chicago is a family owned Mediterranean restaurant located in the heart of the city. The restaurant is run by brothers Mario and Adrian, who have always had a passion for cooking and serving delicious food. Growing up in a Mediterranean household, the brothers were exposed to traditional recipes from an early age, and they decided to bring those recipes to the masses with a modern twist. At Little Lemon, you can expect to find a menu full of classic dishes with a creative twist that makes them stand out from the rest. Whether you're looking for a quick lunch or a leisurely dinner, Little Lemon Chicago is the perfect place to indulge in a delicious meal in a cozy and welcoming atmosphere.</p>
      </div>
      <div>
        <img src={imgThree} alt="restaurant" />
        <img src={imgOne} alt="mario and adrian" />
      </div>
    </section>
    <section>
      <img src={imgTow} alt="mario and adrian" />
      <img src={imgFour} alt="chef" />
    </section>
    </>
  )
}

export default SectionFour;