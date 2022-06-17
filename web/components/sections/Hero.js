import React from 'react'
import PropTypes from 'prop-types'
import imageUrlBuilder from '@sanity/image-url'
import styles from './Hero.module.css'
import client from '../../client'
import SimpleBlockContent from '../SimpleBlockContent'
import Cta from '../Cta'

function urlFor(source) {
  return imageUrlBuilder(client).image(source)
}

function Hero(props) {
  const {heading, backgroundImage, tagline, ctas} = props

  const style = backgroundImage
    ? {
        backgroundImage: `url("${urlFor(backgroundImage).width(2000).auto('format').url()}")`,
      }
    : {}

  return (
    <div className={`${styles.root}`} style={style}>
      <div className={`min-h-screen   p-4 md:max-w-5xl mx-auto z-10 `}>
        <div className="flex items-center bg-black bg-opacity-10 backdrop-blur-2xl px-10 py-20 justify-center mt-48 ">
          <h1 className="  text-3xl md:w-3/4  md:text-5xl font-serif   ">{heading}</h1>
          <div className={`w-2/4 font-thin  text-base ${styles.tagline}`}>
            {tagline && <SimpleBlockContent blocks={tagline} />}
            {ctas && (
              <div className={styles.ctas}>
                {ctas.map((cta) => (
                  <Cta {...cta} key={cta._key} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.propTypes = {
  heading: PropTypes.string,
  backgroundImage: PropTypes.object,
  tagline: PropTypes.array,
  ctas: PropTypes.arrayOf(PropTypes.object),
}

export default Hero
