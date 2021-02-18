import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  GET_BRANDS,
  ADD_SUBRANDS,
  BRANDS_GOT,
  SUBRANDS_ADDED,
} from "../constant/type";

export const LoginRequest = (user) => {
  return {
    type: LOGIN_REQUEST,
    user
  };
};
export const LoginSuccess = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user
  };
};
export const LoginFailure = (user) => {
  return {
    type: LOGIN_FAILURE,
    user
  };
};

export const getSubBrand = (subBrand) => {
  return {
    type: GET_BRANDS,
    subBrand,
  };
};
export const gotSubBrand = (subBrand) => {
  return {
    type: BRANDS_GOT,
    subBrand,
  };
};

export const addSubBrand = (user) => {
  return {
    type: ADD_SUBRANDS,
    user,
  };
};
export const addedSubBrand = (user) => {
  return {
    type: SUBRANDS_ADDED,
    user,
  };
};
