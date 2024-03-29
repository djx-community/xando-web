import React from 'react'
import AppTitle from '../../../components/app-title/AppTitle'
import AboutUsDeveloperCard from '../../../components/about-us-card/AboutUSDeveloperCard'
import HomeFooter from '../../../components/footers/home-footer/HomeFooter'
import BackButton from '../../../components/buttons/back-button/BackButton'

const PageAboutUs: React.FunctionComponent = () => {
  // Logo takeing into variable for passing into component
  const gitHub = (
    <img src="https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/36/6A00FF/external-Github-social-media-tanah-basah-basic-outline-tanah-basah.png" />
  )

  // Developer Data to List at Developer section
  const developersData = [
    {
      name: 'Midlaj C',
      url: 'https://github.com/midlajc'
    },
    {
      name: 'Muhammed Ali',
      url: 'https://github.com/ALIP703'
    },
    {
      name: 'Abdul Samad MJ',
      url: 'https://github.com/abdulsamadmj'
    },
    {
      name: 'Mubashir Angathil',
      url: 'https://github.com/mubashir-angathil'
    }
  ]
  return (
    <section className="flex flex-col h-screen">
      <AppTitle title="About Us" />
      <div className="flex flex-col flex-1 justify-center items-center">
        <div className="flex justify-center md:mt-10 mt-4">
          <AboutUsDeveloperCard name="From DJX Community" icon={gitHub} url="https://github.com/djx-community" />
        </div>
        <h5 className="md:text-xl text-lg font-bold">Contributors</h5>
        <div className="flex justify-center">
          <div className="flex-col justify-center">
            {developersData.map((data) => {
              return (
                <AboutUsDeveloperCard
                  key={data.name}
                  name={data.name}
                  icon={gitHub}
                  url={data.url}
                />
              )
            })}
          </div>
        </div>
      </div>
      <HomeFooter />
      <BackButton />
    </section>
  )
}

export default PageAboutUs
