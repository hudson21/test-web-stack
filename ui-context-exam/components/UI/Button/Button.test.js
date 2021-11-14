/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import Button from './index';

describe('<Button />', () => {
  let expectedProps;

  beforeEach(() => {
    expectedProps = {
      disabled: false,
      value: 'Load More',
      isPrimary: true,
      onClick: jest.fn(),
    };

    render(<Button {...expectedProps} />);
  });

  it('Should display value passed as props', () => {
    const button = document.querySelector(
      `button[data-test="${expectedProps.value}-button"]`
    );
    expect(button.textContent).toBe(expectedProps.value);
  });

  it('Should have disabled status is prop is passed', () => {
    const button = document.querySelector(
      `button[data-test="${expectedProps.value}-button"]`
    );
    expect(button.disabled).toBe(expectedProps.disabled);
  });

  it('Should be primary if isPrimary prop is passed', () => {
    const button = document.querySelector('button.primary-button-class');
    expect(button.classList.contains('primary-button-class')).toBe(true);
  });
});
