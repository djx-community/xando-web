// Developer details card component
import React from 'react';

export default function AboutUsDeveloperCard({ name, icon, url }) {
  return (
    <div className="p-4 flex">
      <h5 className="md:text-xl text-lg w-44">{name}</h5>
      <a className="pl-5 hover:scale-110" href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  );
}
