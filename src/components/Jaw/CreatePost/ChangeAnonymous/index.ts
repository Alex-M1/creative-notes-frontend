import { connect } from 'react-redux';
import { setPostIsAnonim } from '@store/posts/actions';
import { getIsAnonymous } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import ChangeAnonymous from './ChangeAnonymous';

const mapStateToProps = (state: ApplicationState) => ({
  isAnonymous: getIsAnonymous(state),
});
const mapDispatchToProps = {
  setPostIsAnonim,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeAnonymous);
