import PropTypes from 'prop-types'
import React from 'react'
import MailchimpForm from 'react-mailchimp-form'
import styles from './Mailchimp.module.css'

export default function Mailchimp(props) {
  const {heading, subtitle, actionUrl} = props

  return (
    <section className={` ${styles.root}`}>
      <div className={`text-center space-y-4 ${styles.container}`}>
        <h2 className="[heading] text-3xl md:text-5xl font-medium tracking-tight">{heading}</h2>{' '}
        <p className="[text-body] md:text-xl">{subtitle}</p>
        {actionUrl && (
          <MailchimpForm
            action={actionUrl}
            fields={[
              {
                name: 'EMAIL',
                placeholder: 'Email',
                type: 'email',
                className: styles.email,
                required: true,
              },
            ]}
            buttonClassName={styles.button}
            styles={{
              sendingMsg: {
                color: '#0652DD',
              },
              successMsg: {
                color: '#009432',
              },
              duplicateMsg: {
                color: '#EE5A24',
              },
              errorMsg: {
                color: 'red',
              },
            }}
            messages={{
              sending: 'Sending...',
              success: 'Thank you for subscribing!',
              error: 'An unexpected internal error has occurred.',
              empty: 'You must write an e-mail.',
              duplicate: 'Already subscribed',
              button: 'Subscribe!',
            }}
            className={styles.form}
          />
        )}
      </div>
    </section>
  )
}

Mailchimp.propTypes = {
  heading: PropTypes.string,
  subtitle: PropTypes.string,
  actionUrl: PropTypes.string,
}
