const messages = {
  response: {
    error: {
      default: 'Problem with Service!',
    },
  },
  validations: {
    passwordValidation: {
      lessThanTreeSequentialCharacterUpperCase: 'max. of two sequential uppercase character.',
      lessThanTreeSequentialCharacterLowerCase: 'max. of two sequential lowercase character.',
      minimumOneLetterLowerCase: 'it must at least one lowercase letter.',
      minimumOneLetterUpperCase: 'it must at least one uppercase letter.',
      lessThanTreeSequentialDigits: 'max. of two sequential digits.',
      minimumOneSymbol: 'it must at least one symbol.',
      minimumOneDigit: 'it must at least one number.',
    },
    dnaOption: {
      isRequired: 'Is needed select some option',
    },
    isRequired: 'Is required.',
    date:{
      validDate: 'Select a valid date.'
    },
    string: {
      isNotMoreThanExpectedLength: 'The field size is not larger than expected.',
      isMinThanExpectedLength: 'The field size is smaller than expected.',
      isMoreThanExpectedLength: 'The field size is larger than expected.',
      isNotEqualLength: 'The field size is different than expected.',
      isNotValidEmail: 'Enter a valid email address.',
      isNotEqual: 'Fields are not the same.',
      isEmpty: 'The field is empty.',
    },
  },
};

export default messages;
