import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";

function About() {
  return (
    <section className='my-5'>
      <h1 id="about">Who Am I?</h1>
      <img src={coverImage} className='my-2' style={{ width: '100%' }} alt='cover' />
      <div className='my-2'>
        <p>
          This is Test Text to see if its working!
        </p>
      </div>
    </section>
  );
}

export default About;