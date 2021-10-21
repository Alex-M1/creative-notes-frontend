import { setPostValue } from '@store/posts/actions';
import { getCreatePostValue } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { PostInput } from './PostInput';

const mapStateToProps = (state: ApplicationState) => ({
  createPostValue: getCreatePostValue(state),
});

const mapDispatchToProps = {
  setPostValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostInput);
