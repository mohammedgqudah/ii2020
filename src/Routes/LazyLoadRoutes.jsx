import React from 'react';
import Loadable from 'react-loadable';

const Lazyload = ({ loader }) => {
  return Loadable({
    loader,
    loading: 'loading'
  });
};
export const Home = Lazyload({
  loader: () => import('./Home/Home.jsx')
});
export const ErrorPage = Lazyload({
  loader: () => import('./404/404.jsx')
});
export const ContactUs = Lazyload({
  loader: () => import('./ContactUs/ContactUs.jsx')
});
export const Login = Lazyload({
  loader: () => import('../Routes/login-signup/login')
});
export const Signup = Lazyload({
  loader: () => import('../Routes/login-signup/signup')
});
