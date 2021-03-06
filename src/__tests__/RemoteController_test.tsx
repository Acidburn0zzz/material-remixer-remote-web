import * as chai from 'chai';
import * as React from 'react';
import * as TestUtils from 'react-addons-test-utils';

import { remixer } from '../../node_modules/material-remixer/src/core/Remixer';
import { Variable } from '../../node_modules/material-remixer/src/core/variables/Variable';
import { CSS } from '../../node_modules/material-remixer/src/lib/Constants';
import { TextFieldControl } from '../../node_modules/material-remixer/src/ui/controls/TextFieldControl';

const expect = chai.expect;

describe('TextFieldControl', () => {
  const key: string = 'test_variable';
  const initialValue: string = 'test string value';
  let variable: Variable;

  beforeEach(() => {
    variable = remixer.addStringVariable(key, initialValue);
    variable.selectedValue = initialValue;
    this.component = TestUtils.renderIntoDocument(
      <TextFieldControl
        variable={variable}
        updateVariable={null}
      />,
    );
  });

  it('should render with proper class name', () => {
    const control = TestUtils.findRenderedDOMComponentWithClass(
      this.component, CSS.RMX_TEXTFIELD,
    );

    expect(TestUtils.isDOMComponent(control)).to.be.true;
  });

  it('have correct innertext checked value', () => {
    const textField = TestUtils.findRenderedDOMComponentWithClass(
      this.component, 'mdl-textfield__input',
    ) as HTMLInputElement;

    expect(textField.value).to.equal(initialValue);
  });
});
