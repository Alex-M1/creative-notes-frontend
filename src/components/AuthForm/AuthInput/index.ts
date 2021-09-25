import { connect } from 'react-redux';
import { setRegistrationValue } from '@store/auth/actions';
import { getAuthValue } from '@store/auth/selectors';
import { ApplicationState } from '@store/types';
import { AuthInput, IProps } from './AuthInput';

const mapStateToProps = (state: ApplicationState, { type }: Pick<IProps, 'type'>) => ({
  value: getAuthValue(state, type),
});

const mapDispatchToProps = {
  onChange: setRegistrationValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthInput);
