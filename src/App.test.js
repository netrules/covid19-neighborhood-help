import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders request link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/request/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders volunteer link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/volunteer/i);
  expect(linkElement).toBeInTheDocument();
});
