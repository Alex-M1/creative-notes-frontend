import { connect } from 'react-redux';
import { setRegistrationValue } from 'store/registration/actions';
import { regConfirm, regLogin, regPassword } from 'store/registration/selectors';
import { createStructuredSelector } from 'reselect';
import { TRegistartionPayload } from 'store/registration/types';
import { Dispatch } from 'redux';
import Registration from './Registration';

const mapStateToProps = createStructuredSelector({
  login: regLogin,
  password: regPassword,
  confirm: regConfirm,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setRegistrationValue: (payload: TRegistartionPayload) => dispatch(setRegistrationValue(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
