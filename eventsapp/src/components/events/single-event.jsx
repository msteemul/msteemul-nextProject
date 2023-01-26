import React from 'react';
import Image from 'next/image';

const SingleEvent = ({ data }) => {
  return (
    <div>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <input type="email"></input> <button>Submit</button>
    </div>
  );
};

export default SingleEvent;
