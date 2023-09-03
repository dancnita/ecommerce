const productsCateg = [
  {
    id: 1,
    title: 'Computers',
    icon: 'MdOutlineComputer',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2Falienware1.webp?alt=media',
  },
  {
    id: 2,
    title: 'Tablets',
    icon: 'FaTabletAlt',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2FTabletsCateg.png?alt=media',
  },
  {
    id: 3,
    title: 'Cell Phones',
    icon: 'BsPhone',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2FPhones.png?alt=media',
  },
  {
    id: 4,
    title: 'Video Games',
    icon: 'BiJoystick',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2FvideoGames.jpg?alt=media',
  },
  {
    id: 5,
    title: 'TV & Video',
    icon: 'PiMonitorThin',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2Fmonitor-alienware1.avif?alt=media',
  },
  {
    id: 6,
    title: 'Headphones',
    icon: 'FaHeadphones',
    imgUrl:
      'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2Fheadphones.png?alt=media',
  },
];

// const slides = [
//   {
//     url: 'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/categories%2Fmonitor-alienware1.avif?alt=media',
//     title: 'title',
//     msg: 'SALE!!  12% off',
//   },
//   {
//     url: 'https://images.news18.com/ibnlive/uploads/2021/06/1622636840_featured-image-2021-06-02t175556.435.jpg?impolicy=website&width=0&height=0',
//     msg: 'SALE!!  12% off',
//   },
//   {
//     url: 'http://localhost:5173/monitor-alienware.avif',
//     title: 'asd',
//     msg: 'SALE!!  12% off',
//   },
//   {
//     url: 'http://localhost:5173/monitor-alienware1.avif',
//     title: 'citasdasdy',
//     msg: 'SALE!!  42% off',
//   },
//   {
//     url: 'http://localhost:5173/samsung.webp',
//     title: 'asd',
//     msg: 'SALE!!  12% off',
//   },
//   {
//     url: 'http://localhost:5173/react.svg',
//     title: 'asd',
//     msg: 'SALE!!  62% off',
//   },
// ];

const computersProd = [
  {
    id: 1,
    categ: 'Computers',
    title: 'Alienware X',
    imgUrl: [
      'https://dlcdnwebimgs.asus.com/gain/32FA7251-262B-43EC-9278-10161434A7C7/w1000/h732',
      'http://localhost:5173/alienware.webp',
      'http://localhost:5173/alienware1.webp',
      'http://localhost:5173/Tableta.avif',
    ],

    price: 100,
    description:
      'Dell Alienware m18 Gaming Laptop (2023) | 18" QHD+ | Core i9-4TB SSD - 64GB RAM - RTX 4090 | 24 Cores @ 5.4 GHz - 13th Gen CPU - 24GB GDDR6X Win 11 Home',
  },
  {
    id: 2,
    categ: 'Computers',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/Tableta.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 3,
    categ: 'Computers',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/monitor-alienware1.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 4,
    categ: 'Computers',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 5,
    categ: 'Tablets',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 6,
    categ: 'Tablets',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/Tableta.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 7,
    categ: 'Tablets',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/monitor-alienware1.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 8,
    categ: 'Tablets',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 9,
    categ: 'Tablets',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 10,
    categ: 'Cell Phones',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/Tableta.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 11,
    categ: 'Video Games',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/monitor-alienware1.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 12,
    categ: 'Video Games',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 13,
    categ: 'Video Games',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 14,
    categ: 'Video Games',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/Tableta.avif'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 15,
    categ: 'Headphones',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/monitor-alienware1.avif'],
    price: 10,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
  {
    id: 16,
    categ: 'TV & Video',
    title: 'Alienware X',
    imgUrl: ['http://localhost:5173/alienware1.webp'],
    price: 1200,
    description:
      'Alienware m15 R7 Gaming Laptop - 15.6-inch QHD 240Hz 2ms Display, Intel Core i7-12700H, 16GB RAM, 512GB SSD, NVIDIA GeForce RTX 3070 Ti 8GB GDDR6, HDMI, USB-C, Wi-Fi 6',
  },
];

const products = {
  Computers: {
    1: {
      title: 'Laptop Gaming Dell Alienware X16 ',
      desc: 'Laptop Gaming Dell Alienware X16 16" QHD i9-13900HK 32GB Ram NVIDIA RTX 4090 16GB 2TB SSD',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F1%2Fpc1.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F1%2Fpc2.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F1%2Fpc3.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F1%2Fpc4.webp?alt=media',
      ],
      categ: 'Computers',
      inStock: true,
      price: 1800,
      msg: '',
      onFrontPage: true,
    },
    2: {
      title: 'Laptop Gaming Dell Alienware M18',
      desc: 'Laptop Gaming Dell Alienware M18 FHD+ 480Hz i9-13900HX 32GB Ram NVIDIA RTX 4080 12GB 1TB SSD Win11',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F2%2Fpc1.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F2%2Fpc2.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F2%2Fpc3.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F2%2Fpc4.webp?alt=media',
      ],
      categ: 'Computers',
      inStock: true,
      price: 1600,
      msg: '20% off',
      onFrontPage: true,
    },

    3: {
      title: 'Laptop Lenovo ThinkPad P1 ',
      desc: 'Gen 5 16" WQXGA 165Hz i9-12900H 64GB Nvidia RTX 3080Ti 16GB 1TB SSD Win11',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F3%2Fpc1.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F3%2Fpc2.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F3%2Fpc3.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F3%2Fpc4.webp?alt=media',
      ],
      categ: 'Computers',
      inStock: true,
      price: 800,
      msg: '20% OFF',
      onFrontPage: true,
    },
    4: {
      title: 'Desktop Gaming Dell Alienware Aurora R10',
      desc: 'Desktop Gaming Dell Alienware Aurora R10 AMD Ryzen 7 5800 16GB Radeon 6800 XT 16GB 2TB Windows 11',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F4%2F1.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F4%2F2.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F4%2F3.webp?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F4%2F4.webp?alt=media',
      ],
      categ: 'Computers',
      inStock: true,
      price: 1820,
      msg: 'SALE ! 20% OFF',
      onFrontPage: true,
    },
    4: {
      title: 'Laptop ROG STRIX SCAR 17',
      desc: 'Laptop Gaming ASUS ROG Strix SCAR 17 G733QS cu procesor AMD Ryzen™ 9 5900HX pana la 4.60 GHz, 17.3", Full HD, 300Hz, 32GB, 1TB SSD, NVIDIA® GeForce RTX™ 3080 16GB, Free DOS',
      imgUrl: [
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F5%2F1.png?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F5%2F2.png?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F5%2F3.png?alt=media',
        'https://firebasestorage.googleapis.com/v0/b/test-f4f3e.appspot.com/o/Products%2FPC%2F5%2F4.png?alt=media',
      ],
      categ: 'Computers',
      inStock: true,
      price: 1820,
      msg: 'SALE ! 80% OFF',
      onFrontPage: true,
    },
  },
};

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

const currency = '€';

export {
  productsCateg,
  computersProd,
  shippingFormValidationTemplate,
  shippingFormValidationTemplateNoPattern,
  currency,
};

// {
//   "title": "Computers",
//   "desc": "lore ipsum",
//   "imgUrl": "http://192.168.1.205:5173/alienware1.webp",
//   "categ": "Computers",
//   "inStock": "true",
//   "price": "99"
//   }
