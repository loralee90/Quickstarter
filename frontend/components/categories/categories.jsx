import React from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
  const categories = this.props.categories.map(category => {
    return (<li><Link to=`/categories/${category.id}`>{category.name}</Link></li>);
  });

  return (
    <section className="categories">
      <h2>Categories</h2>
      <ul>
        {this.props.categories.map(category => )}
      </ul>
    </section>
  );
};

export default Categories;
