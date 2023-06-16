/* eslint-disable  @typescript-eslint/no-empty-function */
import * as React from 'react';
import renderer from 'react-test-renderer';

import { Button } from '../../src/components';

it(`renders correctly`, () => {
    const tree = renderer.create(<Button title='Test' onPress={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
});
