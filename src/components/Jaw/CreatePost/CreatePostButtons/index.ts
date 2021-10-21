import { privatePostRequest, publishPostRequest } from '@store/posts/actions';
import { getIsSendPost, getCreatePostValue } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { CreatePostButtons } from './CreatePostButtons';

const mapStateToProps = (state: ApplicationState) => ({
  isSendPost: getIsSendPost(state),
  postValue: getCreatePostValue(state),
});
const mapDispatchToProps = {
  privatePostRequest, publishPostRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CreatePostButtons);
