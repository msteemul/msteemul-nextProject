import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeaderLeft = () => {
  return (
    <div>
      <Link href="/" className="left-nav">
        <span>
          <Image alt="logo" src={'/images/AvatarMaker.png'} width={50} height={50} />
        </span>
        <span className="title">Events App</span>
      </Link>
    </div>
  );
};

export default HeaderLeft;
