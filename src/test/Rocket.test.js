import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from '../components/Rocket';
import Rockets from '../components/Rockets';
import store from '../redux/Store';

test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

const rocket = {
  rocket_name: 'John',
  description: 'desc',
  flickr_images: ['#', '#'],
  id: 1,
  reserved: false,
};

test('renders Rocket Component', () => {
  const rocketItem = render(
    <Provider store={store}>
      <Rocket
        name={rocket.rocket_name}
        description={rocket.description}
        imageUrl={rocket.flickr_images[0]}
        key={rocket.id}
        id={rocket.id}
        reserved={rocket.reserved}
      />
    </Provider>,
  );
  expect(rocketItem).toMatchSnapshot();
});

test('renders Rockets Component', () => {
  const rocketCon = render(<Provider store={store}><Rockets /></Provider>);
  expect(rocketCon).toMatchSnapshot();
});
