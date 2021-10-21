import { changeFilterTheme } from '@store/posts/actions';
import { getFilteredTheme } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { emitAction } from '@store/user/actions';
import { connect } from 'react-redux';
import { PostThemeFilter } from './PostThemeFilter';

const mapStateToProps = (state: ApplicationState) => ({
  value: getFilteredTheme(state),
});
const mapDispatchToProps = {
  changeFilterTheme, emitAction
};
export default connect(mapStateToProps, mapDispatchToProps)(PostThemeFilter);
