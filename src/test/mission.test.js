import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Missions from '../components/MissionContainer';
import store from '../redux/Store';
import MissionItem from '../components/MissionItem';

const obj = {
  mission_name: 'muskan',
  mission_id: '1',
  description: 'desc',
  mission: false,
};

test('Demo test', () => {
  expect((1 + 2)).toBe(3);
});

test('renders MissionItem Component', () => {
  const missionItem = render(
    <Provider store={store}>
      <MissionItem mission={obj} key={obj.mission_id} />
    </Provider>,
  );
  expect(missionItem).toMatchSnapshot();
});

test('renders Mission Component', () => {
  const missions = render(<Provider store={store}><Missions /></Provider>);
  expect(missions).toMatchSnapshot();
});
