import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Feed from './feed';
import { fetchAllPhotos } from '../../actions/photos/photo_actions';
import { fetchAllUsers } from '../../actions/user/user_actions';

const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.entities.photos)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllPhotos: () => dispatch(fetchAllPhotos()),
    fetchAllUsers: () => dispatch(fetchAllUsers())
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed));
