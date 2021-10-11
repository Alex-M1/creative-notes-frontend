import { ApplicationState } from '@store/types';
import { getUsersRequest } from '@store/user/actions';
import { getAdminUsers } from '@store/user/selectors';
import { connect } from 'react-redux';
import { AdminPanel } from './AdminPanel';

const mapStateToProps = (state: ApplicationState) => ({
  users: getAdminUsers(state),
});

const mapDispatchToPops = {
  getUsersRequest,
};

export default connect(mapStateToProps, mapDispatchToPops)(AdminPanel);
