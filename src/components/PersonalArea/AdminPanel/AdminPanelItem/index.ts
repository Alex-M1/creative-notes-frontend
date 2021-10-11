import { changeUserRole } from '@store/user/actions';
import { connect } from 'react-redux';
import { AdminPanelItem } from './AdminPanelItem';

const mapDispatchToProps = {
  changeUserRole,
};

export default connect(null, mapDispatchToProps)(AdminPanelItem);
