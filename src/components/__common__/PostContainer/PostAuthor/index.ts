import { deletePost } from '@store/posts/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PostAuthor } from './PostAuthor';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  deletePost: () => dispatch(deletePost()),
});

export default connect(null, mapDispatchToProps)(PostAuthor);
