import React from 'react';
import { Link } from 'react-router-dom';

class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    return (
      <section className="categories">
        <h2>Categories</h2>
        <ul>
          {this.props.categories.map(category => {
            return (
              <li value={category.id} key={category.id}>
                <Link to={`/categories/${category.id}`}>{category.name}</Link>
              </li>
            );
          })}
        </ul>
      </section>
    );
  }
}

export default Categories;
