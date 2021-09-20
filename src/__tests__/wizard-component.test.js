import React from 'react';
import WizardComponent from '../core/components/wizard/wizard-component';
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

describe('Wizard component', () => {
  it('should render with props passed using context', () => {
    useContextMock.mockReturnValue([]);
    const steps = [
      {
        step: 1,
        component: 'xyz',
      },
      {
        step: 2,
        component: 'abc',
      },
    ];
    const onComplete = () => {};
    const element = new ShallowRenderer().render(
      <WizardComponent steps={steps} onComplete={onComplete} />
    );
    expect(element.props.children).toMatchSnapshot();
  });

  it('should change active step on action passed by the child step', () => {
    useContextMock.mockReturnValue([]);
    const steps = [
      {
        step: 1,
        component: 'xyz',
      },
      {
        step: 2,
        component: 'abc',
      },
    ];
    const onComplete = () => {};
    const element = shallow(<WizardComponent steps={steps} onComplete={onComplete} />);
    expect(element.find('#testNextStep')).toHaveLength(1);
    expect(element.find('#testPrevStep')).toHaveLength(1);
    const nextStep = element.find('#testNextStep');
    const prevStep = element.find('#testPrevStep');
    expect(element.find(Stepper)).toHaveLength(1);
    nextStep.simulate('click');
    expect(element.find(Stepper).props().activeStep).toBe(2);
    prevStep.simulate('click');
    expect(element.find(Stepper).props().activeStep).toBe(1);
  });
});
