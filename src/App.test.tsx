import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render the logos', () => {
    expect(screen.getByAltText(/Vite logo/i)).toBeInTheDocument();
    expect(screen.getByAltText(/React logo/i)).toBeInTheDocument();
  });

  it('should display initial count as 0', () => {
    expect(screen.getByText(/count is 0/i)).toBeInTheDocument();
  });

  it('should increment count when button is clicked', () => {
    const button = screen.getByRole('button', { name: /count is/i });
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 1');
    fireEvent.click(button);
    expect(button).toHaveTextContent('count is 2');
  });
});