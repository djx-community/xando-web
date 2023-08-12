// General card component for the about us page
import React from 'react';

export default function AboutUsCard({ title, icon, url }) {
  return (
    <div className="p-5">
      <h5 className="flex  text-xl">{title}</h5>
      <a
        className="flex justify-center hover:scale-110"
        href={url}
        target="_blank"
        rel="noreferrer"
      >
        {icon}
      </a>
    </div>
  );
}
