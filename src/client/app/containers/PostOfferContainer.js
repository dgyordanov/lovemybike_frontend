import { connect } from 'react-redux'
import PostOffer from '../components/PostOffer'
import { postOffer } from '../actions/actions'

const mapStateToProps = (state) => ({
  // TODO: disable the button while posting
})

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (values) => {
      dispatch(postOffer(values));
    }
  }
}

const PostOfferContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostOffer)

export default PostOfferContainer