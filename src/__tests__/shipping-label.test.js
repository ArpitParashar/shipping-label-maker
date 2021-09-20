import React from 'react';
import ShippingLabel from '../features/shipping-label-maker/shipping-label';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';
import Stepper from '@material-ui/core/Stepper';

let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

describe('ShippingLabel component', () => {
  it('should render using context', () => {
    useContextMock.mockReturnValue([{
        from: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        to: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        weight: '',
        shippingOption: '',
      }, ()=>{}]);

    const element = new ShallowRenderer().render(
      <ShippingLabel />
    );
    expect(element.props.children).toMatchSnapshot();
  });

  it('should calculate correct shipping based on weight and mode of shipping', () => {
    useContextMock.mockReturnValue([{
        from: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        to: {
          name: '',
          street: '',
          city: '',
          state: '',
          zip: '',
        },
        weight: 12,
        shippingOption: 1,
      }, ()=>{}]);
   
    const element = shallow(<ShippingLabel />);
    expect(element.find('#shippingcCost').filterWhere((item) => {
        return item.prop('secondary') === '4.80';
      })).toHaveLength(1);
  });
});
