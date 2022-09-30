import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from '../components/NavBar';

test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

test('renders Navbar Component', () => {
  const navbar = render(
    <BrowserRouter>
      {' '}
      <NavBar />
    </BrowserRouter>,
  );
  expect(navbar).toMatchSnapshot();
});
