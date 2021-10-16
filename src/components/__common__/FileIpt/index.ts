import { ApplicationState } from '@store/types';
import { setImg } from '@store/user/actions';
import { getImgName } from '@store/user/selectors';
import { connect } from 'react-redux';
import FileIpt from './FileIpt';

const mapStateToProps = (state: ApplicationState) => ({
  value: getImgName(state),
});

const mapDispatchToProps = {
  onChange: setImg,
};
export default connect(mapStateToProps, mapDispatchToProps)(FileIpt);
