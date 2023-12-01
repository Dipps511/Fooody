// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Foody heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Foody/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders a div with the appropriate class', () => {
  render(<App />);
  const divElement = screen.getByTestId('app-container');
  expect(divElement).toHaveClass('app-container');
});
