import { likePost } from '@store/posts/actions';
import { ApplicationState } from '@store/types';
import { getUserLogin } from '@store/user/selectors';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Likes from './Likes';

const mapStateToProps = (state: ApplicationState) => ({
  userLogin: getUserLogin(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  likePost: (id: string) => dispatch(likePost(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Likes);
