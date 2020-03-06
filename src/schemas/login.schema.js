import * as yup from 'yup';

const LOGIN_SCHEMA = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required()
});

export default LOGIN_SCHEMA;
