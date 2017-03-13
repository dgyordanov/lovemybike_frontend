import { connect } from 'react-redux'
import PostOffer from '../components/PostOffer'
import { postOffer } from '../actions/actions'

const mapStateToProps = (state) => ({
  postOfferInProgress: state.offers.postOfferInProgress
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