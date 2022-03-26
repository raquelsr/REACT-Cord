import React from 'react';
import styled from 'styled-components';

export default function Checkbox({ id, name, checked, label, onChange }) {
  return (
    <CheckboxCont>
      <input
        type="checkbox"
        id={id}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      ></input>
      <label htmlFor={id}>{label}</label>
    </CheckboxCont>
  );
}

const CheckboxCont = styled.div`
  position: relative;
  margin-bottom: 6px;

  & label {
    font-size: 14px;
    font-weight: 100;
    margin-left: 10px;
  }
`;
