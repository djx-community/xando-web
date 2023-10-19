import React from 'react'
// Developer details card component
interface AboutUsDeveloperCardProps {
  name: string
  icon: React.ReactNode
  url: string
}

const AboutUsDeveloperCard: React.FunctionComponent<AboutUsDeveloperCardProps> = ({
  name,
  icon,
  url
}) => {
  return (
    <div className="p-4 flex items-center">
      <h5 className="md:text-xl text-lg w-full">{name}</h5>
      <a className="pl-5 hover:scale-110" href={url} target="_blank" rel="noreferrer">
        {icon}
      </a>
    </div>
  )
}

export default AboutUsDeveloperCard
