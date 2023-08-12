import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
      display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 10px;
    flex-wrap: wrap;
    align-items: baseline;
}
`;

export const StyledField = styled(Field)`
  padding: 4px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-content: flex-start;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;
export const Button = styled.button`
  margin-left: 10px;
  padding: 10px;
  border: none;
  
  border-radius: 4px;
  cursor: pointer;

 
  }
`;
