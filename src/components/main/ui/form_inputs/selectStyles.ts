// selectStyles.ts
import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#F5F5F5',
    margin: '10px 0 0 0',
    color: 'black',
    fontSize: '16px',
    fontFamily: 'Open Sans, sans-serif',
    lineHeight: '1.6',
    boxShadow: 'initial',
    borderColor: 'transparent',
    ':hover': {
      cursor: 'pointer',
      border: '1px solid #35DB4F',
      outline: 'none',
      boxShadow: 'initial',
    },
    ':focus': {
      border: '1px solid #35DB4F',
      outline: 'none',
      boxShadow: 'initial',
    },
    '::placeholder': {
      color: '#787878',
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? '#e3e3e3' : 'white',
    // padding: '7px 20px',
    rounded: 'md',
    cursor: 'pointer',
    borderBottom: '1px solid #787878',
    color: state.isFocused ? 'black' : 'inherit',
    ':hover': {
      backgroundColor: '#e3e3e3',
      color: 'black',
    },
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: 'none',
  }),
  menu: (provided) => ({
    ...provided,

    marginTop: '0px',
    backgroundColor: '#F5F5F5',
    zIndex: 9999,
  }),
  menuList: (provided) => ({
    ...provided,
    padding: '0px',
    maxHeight: '120px',
    zIndex: 9999,
    overflowY: 'auto',
  }),
};