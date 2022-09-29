import { render,screen } from "@testing-library/react";
import Missions from "../components/MissionContainer";

// const obj = {
//     mission_name: 'muskan',
//     mission_id: '1',
//     description: 'desc',
//     mission: false,
// }
test('renders MissionItem Component', ()=>{
    render(<Missions/>);
    const element = screen.getByText('Mission');
    expect(element).toBeInTheDocument();
});

// import renderer from 'react-test-renderer';
// import { expect } from 'vitest';
// import Missions from '../components/MissionContainer';

// test('renders MissionItem Component', () => {
//   const missions = renderer.create(<Missions />).toJSON();
//   expect(missions).toMatchSnapshot();
// });


test('adds 1 + 2 to equal 3', () => {
  expect((1+2)).toBe(3);
});