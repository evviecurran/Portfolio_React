import React from 'react';
import myselfImage from  '../../assets/Myself.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
           <img src={myselfImage} alt="" className="prof" />
        </div>
        <p>
        Hi I am Evelyn, and I am a full stack developer. 
        I go to University of Denver but live in the Roaring Fork Valley.
        I love to ski and be with my cat. 
        </p>
        <p>
          I love learning about anything, from baking all the way to software.
          I have been interested in tech world since I was young and this was just a step towards a future in it. 
        </p>
      </div>
    </section>
  );
}

export default About;