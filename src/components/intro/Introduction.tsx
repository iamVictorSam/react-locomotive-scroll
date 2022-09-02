import image from '../../assets/profile.png';
import './intro-style.css';

const Introduction = () => {
  return (
    <div className='intro-section'>
      <section className='intro-title'>
        I am Sam Victor
        <br />A Frontend Engineer and Technical writer with a deep focus on
        creating pitch-perfect designs
      </section>
        <section className='intro-image'>
                <img src={image}/>
                
        </section>
    </div>
  );
};

export default Introduction;
