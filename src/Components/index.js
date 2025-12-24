import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';


const items = [
  {
    src: 'https://i.pinimg.com/564x/e8/43/61/e843616d8a47f61abeed112c255db41e.jpg',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://i.pinimg.com/564x/e8/43/61/e843616d8a47f61abeed112c255db41e.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
  {
    src: 'https://i.pinimg.com/564x/e8/43/61/e843616d8a47f61abeed112c255db41e.jpg',
    altText: 'Slide 3',
    caption: 'Slide 3',
    key: 3,
  },
];

function Home(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} width="100%"/>
        <CarouselCaption
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <div><br></br><br></br>
    <div class="container">
       <div class="row">
           <div class="col-lg-6  col-md-12 col-sm-12 col-xs-12">
              <br></br><br></br> <center><h1 className='two'>A Landmark For Food In Chennai City.</h1></center>
                                                                                              
        <center><h5>Our Hotel  is always a good choice for a unique gastronomic experience with Indian and International specialities, hanging out with friends or meeting with business partners. With the finest local and international dishes and drinks in the restaurant, we organise all kinds of business luncheons and receptions.Our hotel is more than just a place to stay; it's a temporary home where new experiences begin, offering comfort, relaxation, and a sense of belonging no matter how far you are from where you came.</h5></center>
        
           </div>

           <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">  
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
    </div>

        </div>
    </div><br/><br/><br/>
    

    <center><h1 class="two">Why you'll love Brills</h1><br/><br/></center>
    <div class="container">
      <div class="row">
      <div class="col-lg-4  col-md-4 col-sm-12 col-xs-12">
        <center><img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo1.svg"></img></center><br/>
        <center><h1>Something for everyone</h1></center>
        <center><h5>We've got every meal covered and more: snacks, alcohol, dessert, paper towels...</h5></center>
        </div>
      <div class="col-lg-4  col-md-4 col-sm-12 col-xs-12">
       <center> <img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo2.svg"></img></center><br/><br/>
       <center><h1>Delivery or pickup</h1></center><br></br>
x       <center><h5>Sit back and relax, have us deliver to you or skip the line with pickup.</h5></center>
        </div>
      <div class="col-lg-4  col-md-4 col-sm-12 col-xs-12">
        <center><img src="https://media-cdn.grubhub.com/grubhub-assets/image/upload/v1693490333/SEO-SEM/Unauth_HP_illo3.svg"></img></center><br/><br></br>
        <center><h1>Save with Brills+</h1></center><br></br>
        <center><h5>Join Brills+ and get unlimited $0 delivery fees, exclusive offers, and more.</h5></center>
        </div>

      </div>
    </div><br></br>
    <div class="container">
    <div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <center><h1 class="two">OUR SERVICIES & AMENITIES</h1></center>
    </div><br></br>
</div></div><br></br><br></br>

<div class="container Service"><br/>
    <div class="row">
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-254-swimming-pool@2x.png"></img>INDOOR SWIMMING POOL</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-85-heating@2x.png"></img>MASSAGE CENTER</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-739-check@2x.png"></img>SPA[Additional Charges]</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-394-dumbbell@2x.png"></img>GYM</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-271-set-wine@2x.png"></img>Bar</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-39-airplane@2x.png"></img>Airport Drop-off Service</h5>
                  
      </div>
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-252-diving-scuba@2x.png"></img>Scuba Diving</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-530-bath@2x.png"></img>Private Swimming Pool</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-383-table-tennis@2x.png"></img>Table Tennis Court</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-74-wifi@2x.png"></img>Wifi</h5>

          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-39-airplane@2x.png"></img>Airport Pick-Up Service</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-76-stroller@2x.png"></img>Child Care Service</h5>
      </div>
    
      <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-985-cash-register-alt@2x.png"></img>24 Hrs Front Desk</h5>
          <h5> <img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-883-balloons@2x.png"></img>Kid's Club</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-287-pot@2x.png"></img>Restaurant</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-29-cars@2x.png"></img>Car Rentals</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-738-parking@2x.png"></img>Private Parking</h5>
          <h5><img src="https://www.glyphicons.com/img/glyphicons/basic/2x/glyphicons-basic-708-luggage-alt@2x.png"></img>Luggage Storage</h5>
      </div>
    </div><br/>
</div><br></br><br></br>
     
      <center> <h1 class="two ">PROPERTY POLICIES</h1><br></br></center>

    <div className="container Property"><br/>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Check-in and Check-out Times</h3>
          <p>* Check-in: 15:00–24:00</p>
          <p>* Check-out: Before 12:00</p>
          <p>* Front desk hours: 24/7</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Child Policies</h3>
          <p>* Children of all ages are welcome at this property.</p>
          <p>* Additional fees may be charged for children using existing beds. Add the number of children to get a more accurate price.</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Cribs and Extra Beds</h3>
          <p>* Extra bed and crib policies may vary according to room type. Please refer to the room type details for more information.</p>
        </div>
      </div><br/>
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Pets</h3>
          <p>* Pets are not allowed</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Service Animals</h3>
          <p>* Service animals are allowed</p>
        </div>
        <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
          <h3>Age Requirements</h3>
          <p>* The main guest checking in must be at least 18 years old.</p>
        </div>
      </div><br/>
      
    </div><br></br><hr/><br/>
    </div>
  );
}

export default Home;