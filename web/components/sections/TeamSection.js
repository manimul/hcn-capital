import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import client from '../../client'
import Cta from '../Cta'

import imageUrlBuilder from '@sanity/image-url'

import styles from './TextSection.module.css'
const builder = imageUrlBuilder(client)

function TeamSection(props) {
  const {heading, label, text, teamMembers, cta} = props

  return (
    <div className={styles.root}>
      <section className="md:max-w-6xl p-6 mx-auto space-y-2">
        <div className={'opacity-50 text-base  uppercase tracking-wide'}>{label}</div>
        <h2 className={`max-w-3xl text-5xl font-medium tracking-tight`}>{heading}</h2>
        {text && <SimpleBlockContent blocks={text} />}
        {teamMembers && (
          <div>
            <div className="container m-auto ">
              <div className="">
                {teamMembers.map((teamMember) => (
                  <div
                    key={teamMember._id}
                    className=" flex md:flex-row flex-col  md:even:flex-row-reverse gap-6 relative p-1 pb-16  group bg-white bg-opacity-50 "
                  >
                    <img
                      src={builder.image(teamMember.image).auto('format').width(1000).url()}
                      loading="lazy"
                      width={700}
                      className=" md:w-1/2 md:object-cover  	  transition duration-500  "
                      alt={heading}
                    />
                    <div className="relative space-y-2  p-4">
                      <h4 className="text-3xl  font-sans capitalize font-medium text-black opacity-75">
                        {teamMember.fullName}
                      </h4>
                      <p className="uppercase  font-sans ">{teamMember.role}</p>

                      <p className=" font-bold ">{teamMember.focusArea}</p>
                      <p className="text-gray-600 text-base">
                        {teamMember.bio && <SimpleBlockContent blocks={teamMember.bio} />}{' '}
                      </p>
                      <a href={teamMember.linkedin} className="underline text-yellow-800">
                        Linkedin
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {cta && cta.route && (
                <div className="text-center w-72 mx-auto">
                  {' '}
                  <Cta className="mx-auto" {...cta} />
                </div>
              )}
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
  cta: PropTypes.object,
}

export default TeamSection
