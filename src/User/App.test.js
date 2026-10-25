import { render, screen } from '@testing-library/react';
import App from '../App';
import Team from './Team'

test('renders the app and the team section', () => {
  render(<App />);
  render(<Team />);
  expect(screen.getAllByText(/Team/i).length).toBeGreaterThan(0);
});
