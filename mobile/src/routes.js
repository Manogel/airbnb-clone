import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Book from '~/pages/Book';

const Routes = createAppContainer(createSwitchNavigator({Login, Home, Book}));

export default Routes;
