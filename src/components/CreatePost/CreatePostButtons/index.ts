import { privatePostRequest, publishPostRequest } from '@store/posts/actions';
import { connect } from 'react-redux';
import { CreatePostButtons } from './CreatePostButtons';

const mapDispatchToProps = {
  privatePostRequest, publishPostRequest,
};

export default connect(null, mapDispatchToProps)(CreatePostButtons);
