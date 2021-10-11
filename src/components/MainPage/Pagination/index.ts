import { changePage } from '@store/posts/actions';
import { getTotalPage } from '@store/posts/selectors';
import { ApplicationState } from '@store/types';
import { connect } from 'react-redux';
import { Pagination } from './Pagination';

const mapStateToProps = (state: ApplicationState) => ({
  totalPage: getTotalPage(state),
});

const mapDispatchToProps = {
  changePage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Pagination);
