import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

   // ARRANGE
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);

    // ASSERT
  expect(linkElement).toBeInTheDocument();

  
   render(<Fetch url="/greeting" />)

   // ACT
   await userEvent.click(screen.getByText('Load Greeting'))
   await screen.findByRole('heading')
 
 
   expect(screen.getByRole('heading')).toHaveTextContent('hello there')
   expect(screen.getByRole('button')).toBeDisabled()
});
