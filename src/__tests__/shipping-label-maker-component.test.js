import React from 'react';
import ShippingLabelMakerComponent from '../features/shipping-label-maker/shipping-label-maker-component';
import ShippingLabel from '../features/shipping-label-maker/shipping-label';
import ShallowRenderer from 'react-test-renderer/shallow';
import { shallow } from 'enzyme';

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

describe('Shipping Label Maker Component', () => {
  it('should render using context', () => {
    useContextMock.mockReturnValue([]);
    const element = new ShallowRenderer().render(
      <ShippingLabelMakerComponent />
    );
    expect(element.props.children).toMatchSnapshot();
  });

  it('should change based on on complete passed by the wizard component', () => {
    useContextMock.mockReturnValue([]);
    const parentElement = shallow(
        <ShippingLabelMakerComponent />
      );
    const endStep = parentElement.find('#testComplete');
    endStep.simulate('click');
    expect(parentElement.find(ShippingLabel)).toHaveLength(1);
  });
});
