import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import client from '../../client'

import imageUrlBuilder from '@sanity/image-url'

import styles from './TextSection.module.css'
const builder = imageUrlBuilder(client)

function TeamSection(props) {
  const {heading, label, text, teamMembers} = props

  return (
    <div className={styles.root}>
      <section className="md:max-w-xl p-6 mx-auto space-y-4">
        <div className={styles.label}>{label}</div>
        <h2 className={`text-3xl font-serif {styles.heading}`}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {teamMembers && (
          <div>
            <div className="container m-auto ">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                {teamMembers.map((teamMember) => (
                  <div className="relative p-1 pb-16  group bg-white bg-opacity-50 ">
                    <div className="relative"></div>
                    <img
                      src={builder.image(teamMember.image).auto('format').width(700).url()}
                      loading="lazy"
                      width={700}
                      className="h-64 w-full object-cover  grayscale hover:grayscale-0	  transition duration-500  "
                      alt={heading}
                    />
                    <div className="relative space-y-4  p-4">
                      <h4 className="text-2xl font-serif capitalize text-yellow-900">
                        {teamMember.fullName}
                      </h4>
                      <p className="text-gray-600">
                        {teamMember.bio && <SimpleBlockContent blocks={teamMember.bio} />}{' '}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  )
}

TeamSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  teamMembers: PropTypes.arrayOf(PropTypes.object),
}

export default TeamSection
