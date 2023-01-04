import { Formik } from 'formik';
import {
  BtnRegister,
  FormRegistrate,
  InputReg,
  LabelReg,
} from './RegisterForm.styled';

const registerValues = {
  user_name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const registerSubmit = (values, { resetForm }) => {
    console.log(values);

    // скидаємо форму
    resetForm();
  };

  return (
    <>
      <Formik initialValues={registerValues} onSubmit={registerSubmit}>
        <FormRegistrate>
          <LabelReg htmlFor="">
            UserName
            <InputReg
              type="text"
              name="user_name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
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