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
    overflowY: 'scroll', // Устанавливаем значение overflowY в 'scroll'
    '&::-webkit-scrollbar': {
      width: '16px',
      height: '25px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#FAFAFA',
      borderRadius: '2px',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#787878',
      border: '4px solid #FAFAFA',
      borderRadius: '8px',
    },
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-webkit-scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '&::-webkit-scrollbar-thumb:vertical': {
      height: '25px',
    },
    '& scrollbar': {
      width: '16px',
    },
    '& scrollbar-track': {
      background: '#FAFAFA',
      borderRadius: '2px',
    },
    '& scrollbar-thumb': {
      background: '#787878',
      border: '4px solid #FAFAFA',
      borderRadius: '8px',
      height: '25px',
    },
    '& scrollbar-thumb:hover': {
      background: '#555',
    },
    '& scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '& scrollbar-thumb:vertical': {
      height: '25px',
    },
    '&::-ms-scrollbar': {
      width: '16px',
    },
    '&::-ms-scrollbar-track': {
      background: '#FAFAFA',
      borderRadius: '2px',
    },
    '&::-ms-scrollbar-thumb': {
      background: '#787878',
      border: '4px solid #FAFAFA',
      borderRadius: '8px',
      height: '25px',
    },
    '&::-ms-scrollbar-thumb:hover': {
      background: '#555',
    },
    '&::-ms-scrollbar-thumb:horizontal': {
      maxWidth: '8px',
    },
    '&::-ms-scrollbar-thumb:vertical': {
      height: '25px',
    },
  }),
  clearIndicator: (provided) => ({
    ...provided,
    color: '#000000',
    fontSize: '18px',
    ':hover': {
      color: '#000000',
    },
  }),
};
