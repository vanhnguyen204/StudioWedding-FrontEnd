import {configureStore} from '@reduxjs/toolkit';
import {userReducer} from './userReducer';
import {serviceReducer} from './service/serviceReducer';
import {serviceReducerStaff} from './service/serviceReducerStaff';
import { registerReducer } from "./register/registerReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
    service: serviceReducer,
    serviceForStaff: serviceReducerStaff,
    register: registerReducer,
  },
});
