/**
 * @jest-environment jsdom
 */

import { render, fireEvent } from '@testing-library/react';

import Input from './index';

describe('<Input />', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      label: 'Description',
      value: 'Hello',
      onChange: jest.fn(),
      fullwidth: 'true',
      customstyles: { width: '100%' },
    };

    render(<Input {...expectedProps} />);
  });

  it('Should render value, label passed as props', () => {
    const input = document.querySelector("input[data-test='input']");
    const label = document.querySelector("label[data-test='input-label']");

    expect(input.value).toBe(expectedProps.value);
    expect(label.textContent).toBe(expectedProps.label);
  });

  it('Should change value after triggering onChange event', () => {
    const input = document.querySelector("input[data-test='input']");
    fireEvent.change(input, { target: { value: 'Hello' } });
    expect(input.value).toBe('Hello');
  });
});
