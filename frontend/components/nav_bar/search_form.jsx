import React from 'react';
import { Link } from 'react-router-dom';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: "" };
    this.renderResults = this.renderResults.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  handleChange(e) {
    this.setState({ search: e.currentTarget.value });
  }

  componentWillUpdate(nextProps, nextState) {
    if (this.state.search !== nextState.search) {
      this.props.fetchSearchResults(nextState.search);
    }
  }

  handleClick(e) {
    e.stopPropagation();
    this.setState({ search: "" });
    this.props.closeSearch();
  }

  renderResults() {
    if (this.props.results.length > 0 && this.state.search) {
      return (
        <ul className="search-results">
          {this.props.results.map(result =>
            <li key={result.id} className="search-result-project">
              <div className="result-links">
                <Link onClick={this.handleClick} to={`/projects/${result.id}`}>{result.title}</Link>
              </div>
              <div className="result-category">
                <span>{result.category_name}</span>
              </div>
            </li>
          )}
        </ul>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <div className={`search-container ${this.props.hiddenClass}`}>
        <span id="search-form" >
          <div className="left-search">
            <i className="fa fa-search"></i>
            <input placeholder="Search" onChange={this.handleChange} value={this.state.search} />
          </div>
          <div className="right-search">
            <p onClick={this.handleClick}>x</p>
          </div>
        </span>
        {this.renderResults()}
      </div>
    );
  }
}

export default SearchForm;
