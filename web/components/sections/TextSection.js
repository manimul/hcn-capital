import React from 'react'
import PropTypes from 'prop-types'
import SimpleBlockContent from '../SimpleBlockContent'
import styles from './TextSection.module.css'

function TextSection(props) {
  const {heading, label, text} = props

  return (
    <div id="about" className={styles.root}>
      <section className="md:max-w-3xl p-6 mx-auto space-y-4">
        <div className="[label] opacity-50 text-base  uppercase tracking-wide   ">{label}</div>
        <h2 className="[heading] text-3xl md:text-5xl font-medium tracking-tight">{heading}</h2>
        <div className="[text-body] md:text-xl space-y-6 ">
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
