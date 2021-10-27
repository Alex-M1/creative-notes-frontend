import { likePost } from '@store/posts/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Likes from './Likes';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  likePost: (id: string) => dispatch(likePost(id)),
});

export default connect(null, mapDispatchToProps)(Likes);
