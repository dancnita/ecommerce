const shippingFormValidationTemplate = [
  {
    fieldName: 'firstName',
    label: 'First Name: ',
    type: 'text',
    pattern: '[a-zA-Z]{2,10}',
    title:
      'Must include only letters, at least 2 characters long but no more than 10',
    isRequired: true,
    placeholder: 'First Name',
  },
  {
    fieldName: 'lastName',
    label: 'Last Name: ',
    type: 'text',
    pattern: '[a-zA-Z]{2,10}',
    title:
      'Must include only letters, at least 2 characters long but no more than 10',
    isRequired: true,
    placeholder: 'Last Name',
  },
  {
    fieldName: 'email',
    label: 'Email: ',
    type: 'text',
    pattern: '[a-z0-9]+@[a-z]+.[a-z]{2,3}',
    title: 'Please enter a valid email address',
    isRequired: true,
    placeholder: 'email@email.com',
  },
  {
    fieldName: 'phone',
    label: 'Phone: ',
    type: 'tel',
    pattern: '[0-9]{10,12}',
    title:
      'Please enter a valid phone no=> regex set to digits only 10 to 12digits ',
    isRequired: true,
    placeholder: 'xxxx xxx xxx',
  },
  {
    fieldName: 'address1',
    label: 'Address Line1: ',
    type: 'text',
    pattern: null,
    title: '',
    isRequired: true,
    placeholder: 'Street Name, no, ap. no',
  },
  {
    fieldName: 'address2',
    label: 'Address Line2: ',
    type: 'text',
    pattern: null,
    title: '',
    placeholder: 'City, County, Country',
  },
];
const shippingFormValidationTemplateNoPattern = [
  {
    fieldName: 'firstName',
    label: 'First Name: ',
    type: 'text',
    pattern: null,
    title:
      'Must include only letters and numbers, at least 2 characters long but no more than 10',
    isRequired: true,
    placeholder: 'First Name',
  },
  {
    fieldName: 'lastName',
    label: 'Last Name: ',
    type: 'text',
    pattern: null,
    title:
      'Must include only letters and numbers, at least 2 characters long but no more than 10',
    isRequired: true,
    placeholder: 'Last Name',
  },
  {
    fieldName: 'email',
    label: 'Email: ',
    type: 'text',
    pattern: null,
    title: 'Please enter a valid email address',
    isRequired: true,
    placeholder: 'email@email.com',
  },
  {
    fieldName: 'phone',
    label: 'Phone: ',
    type: 'tel',
    pattern: null,
    title:
      'Please enter a valid phone no=> regex set to digits only 10 to 12digits ',
    isRequired: true,
    placeholder: 'xxxx xxx xxx',
  },
  {
    fieldName: 'address1',
    label: 'Address Line1: ',
    type: 'text',
    pattern: null,
    title: '',
    isRequired: true,
    placeholder: 'Street Name, no, ap. no',
  },
  {
    fieldName: 'address2',
    label: 'Address Line2: ',
    type: 'text',
    pattern: null,
    title: '',
    placeholder: 'City, County, Country',
  },
];

const productsCateg = [
  {
    title: 'Computers',
  },
  {
    title: 'Tablets',
  },
  {
    title: 'Cell Phones',
  },
  {
    title: 'Video Games',
  },
  {
    title: 'TV & Video',
  },
  {
    title: 'Headphones',
  },
];

const currency = '€';

export {
  productsCateg,
  shippingFormValidationTemplate,
  shippingFormValidationTemplateNoPattern,
  currency,
};
