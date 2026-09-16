import sarah from '../../public/img/Per/personOne.png';
import john from '../../public/img/Per/personFour.png';
import jimmy from '../../public/img/Per/personThree.png';
import jessica from '../../public/img/Per/personTow.png';
import star from '../../public/icon/star.png'
function SectionThree() {

  const sectionThree = [
    {
      name: 'Sarah Lopez',
      userName: 'Sarah72',
      img: sarah,
      description: "Seriously cannot stop thinking about the Turkish Mac n' Cheese!!"
    },
        {
      name: 'John Doe',
      userName: 'Johnny_Doe',
      img: john,
      description: "We had such a great time celebrating my grandmothers birthday!"
    },
    {
      name: 'Jimmy Smith',
      userName: 'Jim_Done',
      img: jimmy,
      description: "Such a chilled out atmosphere, love it!"
    },
    {
      name: 'Jessica Brown',
      userName: 'flowergirl',
      img: jessica,
      description: "Best Feta Salad in town. Flawless every time!"
    }
  ]

  return (
    <section>
      {sectionThree.map((item, index) => (
        <div key={index}>
          <div>
          <img src={item.img} alt={item.name} />
          <div>
          <h3>{item.name}</h3>
          <p>{item.userName}</p>
          </div>
          </div>
          <div className="flex items-center gap-1">
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
            <img src={star} alt="Star"/>
          </div>
          <p className="text-center">{item.description}</p>
        </div>
      ))}

    </section>
  )
}

export default SectionThree ;