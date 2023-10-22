import { render, screen } from '@testing-library/react';
// same with here, does it matter if I put js or not
import App from './App.js';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
