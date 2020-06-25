import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CategoriesTitle.scss';

const CategoriesTitle = ({ children, title }) => (
  <div className='categories'>
    <h2 className='categories__title'>{title}</h2>
    {children}
  </div>

);

CategoriesTitle.propTypes = {
  title: PropTypes.string,
};

export default CategoriesTitle;
