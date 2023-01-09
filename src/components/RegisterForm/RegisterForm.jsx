import { Formik } from 'formik';
import {
  BtnRegister,
  FormRegistrate,
  InputReg,
  LabelReg,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';

const registerValues = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const registerSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(register(values));

    // скидаємо форму
    resetForm();
  };

  return (
    <>
      <Formik initialValues={registerValues} onSubmit={registerSubmit}>
        <FormRegistrate>
          <LabelReg htmlFor="">
            UserName
            <InputReg type="text" name="name" required />
          </LabelReg>
          <LabelReg htmlFor="">
            Email
            <InputReg type="email" name="email" required />
          </LabelReg>
          <LabelReg htmlFor="">
            Password
            <InputReg type="password" name="password" required />
          </LabelReg>
          <BtnRegister type="submit">Register</BtnRegister>
        </FormRegistrate>
      </Formik>
    </>
  );
};
