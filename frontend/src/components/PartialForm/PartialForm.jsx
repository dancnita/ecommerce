import React, { useState } from 'react';
import Parag from '../Parag/Parag';
import TitleH4 from '../TitleH4/TitleH4';
import InputText from '../InputText/InputText';
import Container from '../Container/Container';
import './partialForm.css';

const PartialForm = ({
  title,
  inputTemplate,
  errors,
  handleChange,
  className,
}) => {
  return (
    <Container className='partialForm-container'>
      <TitleH4 text={title} />

      {inputTemplate.map((item, i) => (
        <InputText
          style={
            !errors
              ? null
              : errors.some((e) => e.path.slice(4) === item.fieldName)
              ? { color: 'red' }
              : null
          }
          labelText={item.label}
          type={item.type}
          pattern={item.pattern}
          title={item.title}
          isRequired={item.isRequired}
          placeholder={item.placeholder}
          key={i}
          value={item.value}
          onChange={handleChange(item.fieldName)}
          isError={
            !errors
              ? false
              : errors.some((e) => e.path.slice(4) === item.fieldName)
              ? true
              : false
          }
        />
      ))}
    </Container>
  );
};

export default PartialForm;
