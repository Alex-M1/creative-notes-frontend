import { changeCommentValue, createCommentRequest } from '@store/comments/actions';
import { getCommentValue } from '@store/comments/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { CreateComment } from './CreateComment';

const mapStateToProps = (state: ApplicationState) => ({
  value: getCommentValue(state),
});
const mapDispatchToProps = {
  changeCommentValue,
  createComment: createCommentRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);
