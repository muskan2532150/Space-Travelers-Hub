import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux/Store';
import Profile from '../components/Profile';

test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

test('renders Profile Component', () => {
  const profile = render(<Provider store={store}><Profile /></Provider>);
  expect(profile).toMatchSnapshot();
});
