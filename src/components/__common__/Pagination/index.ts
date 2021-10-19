import { POST_KEY } from '@constants/posts';
import { changePage } from '@store/posts/actions';
import { getTotalPage } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Pagination } from './Pagination';

const mapStateToProps = (state: ApplicationState, props: { postKey: POST_KEY }) => ({
  totalPage: getTotalPage(state, props.postKey),
});

const mapDispatchToProps = (dispatch: Dispatch, props: { postKey: POST_KEY }) => ({
  changePage: ({ page }) => dispatch(changePage({ postRequestName: props.postKey, page })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
