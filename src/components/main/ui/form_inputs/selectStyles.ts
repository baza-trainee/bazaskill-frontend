// selectStyles.ts
import { StylesConfig } from 'react-select';

export const selectStyles: StylesConfig = {
  control: (provided) => ({
    ...provided,
    backgroundColor: '#F5F5F5',
    padding: '6px 16px',
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
    padding: '7px 20px',
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
  menuList: (provided) => ({
    ...provided,
    backgroundColor: '#F5F5F5',
    maxHeight: '120px',
    padding: '0',
    overflowY: 'scroll',
    '-webkit-overflow-scrolling': 'touch',
    zIndex: 9999,
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#FAFAFA',
      borderRadius: '4px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: '#C1C1C1',
      borderRadius: '4px',
    },
    scrollbarWidth: 'thin',
    scrollbarColor: '#C1C1C1 #FAFAFA',
  }),
};
