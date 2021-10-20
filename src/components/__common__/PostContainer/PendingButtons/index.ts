import { rejectPendingPost, resolvePendingPost } from '@store/user/actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { PendingButtons } from './PendingButtons';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  rejectPendingPost: (id: string) => dispatch(rejectPendingPost(id)),
  resolvePendingPost: (id: string) => dispatch(resolvePendingPost(id)),
});

export default connect(null, mapDispatchToProps)(PendingButtons);
