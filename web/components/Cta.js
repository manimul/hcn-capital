import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import styles from './Cta.module.css'

function cta(props) {
  const {title, route, link} = props

  if (route && route.slug && route.slug.current) {
    return (
      <Link
        href={{
          pathname: '/LandingPage',
          query: {slug: route.slug.current},
        }}
        as={`/${route.slug.current}`}
      >
        <a
          className={`hover:bg-white hover:text-gray-500  backdrop-blur-xl cursor-pointer uppercase text-sm md:text-lg transition tracking-wider ease-in-out  ${styles.button}`}
        >
          {title}{' '}
        </a>
      </Link>
    )
  }

  if (link) {
    return (
      <a
        className={`hover:bg-white hover:text-gray-500  backdrop-blur-xl cursor-pointer uppercase text-lg transition tracking-wider ease-in-out  ${styles.button}`}
        href={link}
      >
        {title}
      </a>
    )
  }

  return (
    <a
      className={`hover:bg-white hover:text-gray-500  backdrop-blur-xl cursor-pointer uppercase text-lg transition tracking-wider ease-in-out ${styles.button}`}
    >
      {title}
    </a>
  )
}

cta.propTypes = {
  title: PropTypes.string.isRequired,
  route: PropTypes.shape({
    slug: PropTypes.shape({
      current: PropTypes.string,
    }),
  }),
  link: PropTypes.string,
}

export default cta
