import React from 'react';
import '../assets/styles/components/CategoriesTitle.scss';

const CategoriesTitle = ({ children, title }) => (
  <div clasName='categories'>
    <h2 className='categories__title'>{title}</h2>
    {children}
  </div>

);

export default CategoriesTitle;
