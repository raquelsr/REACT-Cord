import * as colors from '../../css/constants/colors';
import React from 'react';
import styled from 'styled-components';

export default function SearchBar({
  icon,
  id,
  type,
  placeholder,
  onChange,
  onClick,
}) {
  const executeOnClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <InputWrapper
      className="search_bar_wrapper"
      onClick={() => executeOnClick()}
    >
      <img src={icon.src} alt={icon.alt} htmlFor={id} width="25" />
      <input
        type={type}
        id={id}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 2px solid;
  color: ${colors.primaryColor};

  input {
    width: calc(100% - 35px);
    border: 0;
    outline: none;
    color: ${colors.primaryColor};
    font-size: 1.2em;
    margin-left: 10px;
    font-weight: 900;

    &::placeholder {
      opacity: 0.8;
      color: ${colors.primaryColor};
      font-weight: 300;
    }
  }
`;
