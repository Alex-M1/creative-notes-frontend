import { setPostTheme } from '@store/posts/actions';
import { getPostTheme } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { ChangePostTheme } from './ChangePostTheme';

const mapStateToProps = (state: ApplicationState) => ({
  theme: getPostTheme(state),
});
const mapDispatchToProps = {
  setPostTheme,
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangePostTheme);
