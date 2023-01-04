import { Formik } from 'formik';

import {
  BtnLogin,
  FormLogin,
  InputLogin,
  LabelLogin,
} from './LoginForm.styled';

const loginValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const loginSubmit = (values, { resetForm }) => {
    console.log(values);

    // скидаємо форму
    resetForm();
  };

  return (
    <>
      <Formik initialValues={loginValues} onSubmit={loginSubmit}>
        <FormLogin>
          <LabelLogin htmlFor="">
            Email
            <InputLogin type="email" name="email" required />
          </LabelLogin>
          <LabelLogin htmlFor="">
            Password
            <InputLogin type="password" name="password" required />
          </LabelLogin>
          <BtnLogin type="submit">Log in</BtnLogin>
        </FormLogin>
      </Formik>
    </>
  );
};
