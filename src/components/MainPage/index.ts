import { ApplicationState } from '@store/types';
import { getInitStatus, getUserRole } from '@store/user/selectors';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';
import { compose } from 'redux';
import { getPosts } from '@store/posts/selectors';
import { APP_ROUTES } from '@constants/appRoutes';
import MainPage from './MainPage';
import withContent from '../hoc/withContent';

const mapStateToProps = (state: ApplicationState, props: RouteComponentProps) => ({
  initStatus: getInitStatus(state),
  currentUserRole: getUserRole(state),
  posts: getPosts(state, props.location.pathname as APP_ROUTES),
});

export default compose(
  withContent,
  withRouter,
  connect(mapStateToProps),
)(MainPage);
