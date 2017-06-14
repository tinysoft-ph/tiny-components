import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../src/index';

test( 'should render with type', () => {
  const component = renderer.create(
    <Button type="primary" />,
  );
  expect( component.toJSON() ).toMatchSnapshot();
} );
