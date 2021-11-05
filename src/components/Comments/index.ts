import { getCommentsRequest, leaveRoomRequest } from '@store/comments/actions';
import { getComments } from '@store/comments/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withContent from '../hoc/withContent';
import { Comments } from './Comments';

const mapStateToProps = (state: ApplicationState) => ({
  comments: getComments(state),
});

const mapDispatchToProps = {
  leaveRoom: leaveRoomRequest,
  getComments: getCommentsRequest,
};

export default compose(
  withContent,
  connect(mapStateToProps, mapDispatchToProps),
)(Comments);
