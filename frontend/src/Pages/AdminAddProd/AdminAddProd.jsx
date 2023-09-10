import React from 'react';
import './adminAddProd.css';
import TitleH2 from '../../components/TitleH2/TitleH2';
import Container from '../../components/Container/Container';
import axios from 'axios';

const AdminAddProd = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log('submit');

    //axios.post(`http://127.0.0.1:5000/api/product/newProd`);
    //save all in obj
  };
  return (
    <div className='adminAddProd'>
      <TitleH2 text={`Admin Add Product`} />

      <Container>
        <TitleH2 text={`test`} />
      </Container>

      <form onSubmit={onSubmit}>
        <label>
          Choose product category:
          <select>
            <option value='Computers'>Computers</option>
            <option value='Tablets'>Tablets</option>
            <option value='Cell Phones'>Cell Phones</option>
            <option value='Video Games'>Video Games</option>
            <option value='TV & Video'>TV & Video</option>
            <option value='Headphones'>Headphones</option>
          </select>
        </label>

        <label>
          Product Title
          <input type='text' />
        </label>
        <label>
          Product Description
          <input type='text' />
        </label>

        <label>
          Product Images (recommended 4 Images)
          <input type='file' />
          <input type='file' />
          <input type='file' />
          <input type='file' />
        </label>

        <label>
          Product In Stock
          <select>
            <option value='true'>true</option>
            <option value='false'>false</option>
          </select>
        </label>

        <label>
          Product Price
          <input type='text' />
        </label>

        <label>
          Product On front Page
          <select>
            <option value='true'>true</option>
            <option value='false'>false</option>
          </select>
        </label>

        <label>
          Product (front page msg)
          <input type='text' />
        </label>

        <input type='submit' />
      </form>
    </div>
  );
};

export default AdminAddProd;
