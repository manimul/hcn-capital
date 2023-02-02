import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    <div id="about" className={styles.root}>
      <section className="md:max-w-3xl p-6 mx-auto space-y-4">
        <div className={styles.label}>{label}</div>
        <h2 className={`text-3xl  font-sans `}>{heading}</h2>
        <div className="text first-letter:text-2xl">
          {text && <SimpleBlockContent blocks={text} />}
        </div>
      </section>
    </div>
  )
}

TextSection.propTypes = {
  heading: PropTypes.string,
  label: PropTypes.string,
  text: PropTypes.arrayOf(PropTypes.object),
}

export default TextSection
