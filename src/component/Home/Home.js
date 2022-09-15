import React, { Fragment } from 'react'
import Header from './Header'
import "./Home.css"
import Data from '../../Data'
import Carousel from 'react-bootstrap/Carousel';
import Number from './Number.js'; 
import Pride from './pride.js';
import Ingredients from './ingredients';
import Pralex from './pralex';
import Questions from './Questions';
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
*/

const Home = () => {

   let blogtime = Data.map((item)=>{
    return(
      <div className='col-md-4'>
        <div className='box'>
<img src={item.img} />
<h4>{item.title}</h4>
<p>{item.time}</p>
<h4 className='price'>{item.price}</h4>
<button><a href='#'>Oeder Now</a></button>
</div>

      </div> 
    )
   })
  return (
    
      <Fragment>
        <Header/>

        <Number/>

      <Pride/>

<Ingredients/>

<Pralex/>

      
      <section className='Explore'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12 cal-md-12'>

<h2 className='Explore-h2'>Explore Our Foods</h2>
<p className='Explore-p'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>

            </div>
            <div className='row'>
             {blogtime}
            </div>

          </div>

        </div>
      </section>


<section className='slider'>
<Carousel>
      <Carousel.Item>
        <img
           
          src="https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/281153228_3245385812452093_1495205300027438233_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=rKCS13s1IDQAX9m5LN_&_nc_ht=scontent.fgza2-3.fna&oh=00_AT8CVO8k9XpU6L23RrHCwdMEs6UJKMijR056MSnJvL0i8Q&oe=63271F20"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Mohammed Jalhoom</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    

    <Carousel.Item>
        <img
      
          src="https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-1/229901027_2009302875874560_6901383489790208448_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=5v9KCrSnb1gAX876T6a&_nc_ht=scontent.fgza2-1.fna&oh=00_AT_4j3P1bdDQHVgqOWmFLQ7g2QB0FN6mzMgnfCmS2lnhig&oe=6326DAB0"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Wasiim Agrami</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
   


    <Carousel.Item>
        <img
          
          src="https://scontent.fgza2-1.fna.fbcdn.net/v/t39.30808-6/275109532_234420435566184_2476859475043571908_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Kip6Hg6CH44AX9fmg4_&_nc_oc=AQkebv_w3VjBG4Ssc-NUosY9hn0Kvgc2mkg0cVWiNRdEgqV1FE8djKjFejNechwCBX0&tn=rGSeH28AE1rlbGFh&_nc_ht=scontent.fgza2-1.fna&oh=00_AT8zg-__RXS_NE_MLlagQzzeEJ622RagfvZaBB2n9HlFEA&oe=6327759A"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Karim Agrami</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          
          src="https://scontent.fgza2-3.fna.fbcdn.net/v/t1.6435-1/76765605_2570066086417502_8013229834014556160_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=UlJw_qXsXsIAX93Zfa5&_nc_ht=scontent.fgza2-3.fna&oh=00_AT9rT-duCWx7UW5F-U88W8fkbRAB2iMkkQGR-1urzMKJaw&oe=63459E55"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Ahmad Agrami</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          
          src="https://scontent.fgza2-3.fna.fbcdn.net/v/t39.30808-6/242033868_590721535676693_7163297602173345636_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=iyXabOw0Wg8AX-8IoIE&_nc_ht=scontent.fgza2-3.fna&oh=00_AT_1buQFCdVrivsSj8rbcI_LdRyVhzu_KHB4xiHeoD0YSg&oe=6326F9B7"
          alt="First slide"
          
        />
        <Carousel.Caption>
          <h3>Abed Ahmad</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>

</section>


<Questions/>


<section className='Baked'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>

        <h1>Baked fresh daily by bakers with passion.</h1>
        <button><a href='#'>learn more</a></button>
       
      </div>
      
   



    </div>
  </div>

</section>

<section className='Whoarewe'>
  <div className='container'>
    <div className='row'>
      <div className='col-md-12'>
      <h1>Connect.....</h1>
      <ul>
        <li>Who are you</li>
        <b>Palestinian restaurant for oriental and western food.</b>
        <li><a href='#'>facebook</a></li>
        <li><a href='#'>Whats App</a></li>
        <li><a href='#'>instgram</a></li>
        <li><a href='#'>twiter</a></li>
      </ul>

      </div>

    </div>

  </div>

</section>



      </Fragment>
    
  )
}

export default Home
