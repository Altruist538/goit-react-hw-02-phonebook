import { Formik } from 'formik';

import { nanoid } from 'nanoid';
import {
  StyledForm,
  StyledField,
  StyledError,
  Button,
} from './ContactForm.styled';

export const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={(values, actions) => {
        onAdd({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <StyledForm>
        <label>
          Name
          <StyledField
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <StyledError name="name" component="div" />
        </label>

        <label>
          Number
          <StyledField
            type="number"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <StyledError name="time" component="div" />
        </label>

        <Button type="submit">Add contact</Button>
      </StyledForm>
    </Formik>
  );
};
