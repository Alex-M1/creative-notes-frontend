import { changeFilterTheme, emitAction } from '@store/posts/actions';
import { getFilteredTheme } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { PostThemeFilter } from './PostThemeFilter';

const mapStateToProps = (state: ApplicationState) => ({
  value: getFilteredTheme(state),
});
const mapDispatchToProps = {
  changeFilterTheme, emitAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(PostThemeFilter);
