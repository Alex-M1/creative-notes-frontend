import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { push } from 'react-router-redux';
import { APP_ROUTES } from '@constants/appRoutes';
import { PostLinks } from './PostLinks';

const mapDispatchToProps = (dispatch: Dispatch) => ({
  redirectToMain: () => dispatch(push(APP_ROUTES.MAIN)),
  redirectToPrivate: () => dispatch(push(APP_ROUTES.PRIVATE)),
  redirectToPending: () => dispatch(push(APP_ROUTES.PENDING)),
});
export default connect(null, mapDispatchToProps)(PostLinks);
