/*
filename: App.test.js
student name: Arjun Chovatiya
student Id: 301352977
date: 27/09/2024
*/

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
