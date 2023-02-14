import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {withRouter} from 'next/router'
import styles from './Footer.module.css'
import SimpleBlockContent from './SimpleBlockContent'
import {getPathFromSlug, slugParamToPath} from '../utils/urls'

function Footer(props) {
  const {navItems, text, router} = props
  return (
    <div className={`  `}>
      <section className={`{[contact-section]  md:p-12    ${styles.gradient}  }`}>
        <div className="container  mx-auto flex   flex-col py-24 px-8 md:px-12 md:flex-row   md:space-x-16 ">
          <div className="md:w-3/4 space-y-4 mb-12  ">
            {' '}
            <h2 className="[label] opacity-50 text-base  uppercase tracking-wide ">
              PARTNER MED HCN KAPITAL FÖR HÅLLBAR TILLVÄXT{' '}
            </h2>
            <h3 className="[heading] text-3xl md:text-5xl font-medium tracking-tight">
              Gå ihop med en pålitlig investeringspartner som är engagerad i din framgång{' '}
            </h3>
            <div className="md:text-xl space-y-4   ">
              <p className="">
                På HCN Capital Group investerar vi i seriösa företag med målet att tillhandahålla
                exceptionella avkastning och hållbar tillväxt. Vårt team, med dess entreprenörskap
                och affärer expertis, erbjuder stöd och vägledning genom en unik engagemangsmodell
                och en bibliotek med beprövade strategier.
              </p>
              <p>
                {' '}
                Kontakta oss idag för att boka ett samtal och diskutera ditt företag. Fyll i
                formuläret med din information och en kort översikt. Låt oss arbeta tillsammans för
                att driva ditt företag framåt.
              </p>

              <div className="hidden">
                <div className=" flex  space-x-4  ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#E8B127] h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div>
                    <span className="text-[#E8B127] text-md  font-sans  block">Telephone</span>
                    <a>01 23 456 789</a>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#E8B127] h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>{' '}
                  <div>
                    <span className="text-[#E8B127] text-md  font-sans  block">Email</span>
                    <a className="underline" href="mailto:info@hcncapital.se">
                      hello@hcncapital.se
                    </a>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#E8B127] h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div>
                    <span className="text-[#E8B127] text-md   block">Address</span>
                    <a>Basunvägen 4 SE-237 42 Borgeby, Sweden</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="[contact form section] md:w-2/3 -mx-8  flex flex-col bg-white bg-opacity-50 shadow-3xl    rounded-2xl">
            <form className="  h-auto   p-8 md:p-12 text-black   ">
              <h2 className="text-2xl  ">Boka ditt möte nu</h2>

              <fieldset className="flex flex-col">
                <label htmlFor="fullname" className=" font-sans mt-8 ">
                  Namn<span className="text-red-500 dark:text-gray-50">*</span>
                </label>
                <input
                  type="text"
                  name="fullname"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="email" className="  font-sans mt-4 ">
                  Epost<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="company" className=" font-sans mt-4 ">
                  Företag<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="company"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light "
                />

                <label htmlFor="message" className="  font-sans mt-4 ">
                  Meddelande<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500  "
                ></textarea>
                <button className="mt-8 text-[#AAC29E]  bg-none border-2  border-[#AAC29E]  py-5  inline-block tracking-wide  font-sans font-bold uppercase  ">
                  Skicka meddelande{' '}
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>

      <nav className="bg-white bg-opacity-25 py-24">
        <ul className={`${styles.items}`}>
          {navItems &&
            navItems.map((item) => {
              const isActive = slugParamToPath(router.query.slug) === item.slug.current
              return (
                <li key={item._id} className={styles.item}>
                  <Link href={getPathFromSlug(item.slug.current)}>
                    <a data-is-active={isActive ? 'true' : 'false'} aria-current={isActive}>
                      {item.title}
                    </a>
                  </Link>
                </li>
              )
            })}
        </ul>
      </nav>
    </div>
  )
}

Footer.propTypes = {
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      slug: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  text: PropTypes.arrayOf(PropTypes.object),
  router: PropTypes.shape({
    pathname: PropTypes.string,
    query: PropTypes.shape({
      slug: PropTypes.string,
    }),
  }),
}

export default withRouter(Footer)
