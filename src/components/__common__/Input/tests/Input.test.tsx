import React from 'react';
import { shallow } from 'enzyme';
import Input from '../Input';
import { IInput } from '../types';

describe('Input', () => {
  let props: IInput;
  beforeEach(() => {
    props = {
      id: 'id',
      name: 'name',
      width: '100px',
      value: 'value',
      onChange: jest.fn(),
      placeholder: 'Test',
    };
  });
  it('Should match snapshot', () => {
    const component = shallow(<Input {...props} />);
    expect(component.html()).toMatchSnapshot();
  });
  it('should render StLabel if has label props', () => {
    const component = shallow(<Input {...props} label='label' />);
    expect(component.find('styled__StLabel')).toHaveLength(1);
  });
  it('should render StInput', () => {
    const component = shallow(<Input {...props} />);
    expect(component.find('styled__StInput')).toHaveLength(1);
  });
  it('should render StErrorSpan if has errorMessage props', () => {
    const component = shallow(<Input {...props} errorMessage='test' />);
    expect(component.find('styled__StErrorSpan')).toHaveLength(1);
  });
  it('shouldn\'t render StErrorSpan if hasn\'t errorMessage props', () => {
    const component = shallow(<Input {...props} />);
    expect(component.find('styled__StErrorSpan')).toHaveLength(0);
  });
  it('shouldn\'t render StLabel if hasn\'t label props', () => {
    const component = shallow(<Input {...props} />);
    expect(component.find('styled__StLabel')).toHaveLength(0);
  });
  it('should call onChange', () => {
    const component = shallow(<Input {...props} />);
    component.find('styled__StInput').simulate('change', { target: { name: props.name, value: 'testValue' } });
    expect(props.onChange).toHaveBeenCalledWith({ name: props.name, value: 'testValue' });
  });
});
