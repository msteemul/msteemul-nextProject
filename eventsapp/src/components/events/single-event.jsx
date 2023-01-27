import React from 'react';
import Image from 'next/image';

const SingleEvent = ({ data }) => {
  const onSubmit = (e) => {};
  return (
    <div className="event_single_page">
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label>Get Registered</label>
        <input type="email" id="email" placeholder="please insert your email"></input>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default SingleEvent;
