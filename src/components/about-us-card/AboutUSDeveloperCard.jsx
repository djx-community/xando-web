import React from 'react'
// Developer details card component
export default function AboutUsDeveloperCard ({ name, icon, url }) {
  return (
    <div className="p-4 flex items-center">
      <h5 className="md:text-xl text-lg w-full">{name}</h5>
      <a className="pl-5 hover:scale-110" href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  )
}
