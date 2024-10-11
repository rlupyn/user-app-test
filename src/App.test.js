import { render, screen } from '@testing-library/react';
import App from './App';

describe('App.jsx', () => {
  it('should render App component', () => {
    render(<App />);
  
    const headerTitle = screen.getByText("Employee Information");
    const themeButton = screen.getByText("Theme");
    const filterButton = screen.getByText("Apply filter");
    const monthOptions = screen.getByTestId("sort-options");
  
    expect(headerTitle).toBeInTheDocument();
    expect(themeButton).toBeInTheDocument();
    expect(filterButton).toBeInTheDocument();
    expect(monthOptions).toBeInTheDocument();
  });
})