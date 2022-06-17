// post.js
import {useRouter} from 'next/router'
import Layout from '../../components/Layout'
import PropTypes from 'prop-types'

const Post = (props) => {
  const router = useRouter()
  const {config = {}} = props

  return <Layout config={config}></Layout>
}

Post.propTypes = {
  config: PropTypes.any,
}

export default Post
