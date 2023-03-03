import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import client from '../../client'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

const builder = imageUrlBuilder(client)

function NewsSection(props) {
  const {heading, label, text, newsPosts} = props

  return (
    <div>
      <section className="mx-auto space-y-4  ">
        <div className="md:max-w-7xl px-8 py-24 mx-auto">
          <div className="text-center  mx-auto mb-4">
            <div className={styles.label}>{label}</div>
            <h2 className={`text-3xl  md:text-5xl font-medium tracking-tight `}>{heading}</h2>
          </div>

          {text && <SimpleBlockContent blocks={text} />}

          {newsPosts && (
            <div>
              <div className="container m-auto  ">
                <div className="grid gap-8 sm:grid-cols-2 mt-7 lg:grid-cols-2">
                  {newsPosts.map((newsPost) => (
                    <div
                      key={newsPost._id}
                      className="relative p-2  pb-16  group hover:bg-white hover:-translate-y-2 ease-in-out transition-all delay-50 duration-500  cursor-pointer  "
                    >
                      <div className="relative"></div>
                      <img
                        src={builder
                          .image(newsPost.backgroundImage)
                          .auto('format')
                          .width(700)
                          .url()}
                        loading="lazy"
                        width={700}
                        className="h-64 w-full object-cover   transition duration-500  "
                        alt={heading}
                      />
                      <div className="relative space-y-4  p-4">
                        <h4 className="text-2xl  font-bold opacity-75 capitalize ">
                          {newsPost.title}
                        </h4>
                        <p className="">
                          {newsPost.excerpt && <SimpleBlockContent blocks={newsPost.excerpt} />}{' '}
                        </p>
                      </div>
                      <a
                        href={newsPost.slug.current}
                        className="absolute group-hover:translate-x-2 group-hover:opacity-80 opacity-40 ease-in-out transition-all delay-100 duration-500   inset-x-4 bottom-4 flex items-center space-x-2"
                      >
                        <div
                          aria-hidden="true"
                          className="h-10 w-10 flex border border-slate-800 rounded-full"
                        >
                          <svg
                            aria-hidden="true"
                            width={24}
                            height={24}
                            fill="none"
                            className="my-auto mx-auto flex-none text-slate-800 "
                          >
                            <path
                              d="M10.75 8.75l3.5 3.25-3.5 3.25"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </div>
                        <span className="text-slate-800 font-medium">Read more</span>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

NewsSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
  newsPosts: PropTypes.arrayOf(PropTypes.object),
}

export default NewsSection
