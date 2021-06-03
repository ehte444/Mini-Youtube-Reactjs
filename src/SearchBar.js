import React from 'react'

export default class SearchBar extends React.Component {
  
  state = { term: '' };

  inputHandler = (e) => {
    this.setState({ term: e.target.value });
  }
  
  onFormSubmit = (e) => {
    e.preventDefault();

    //TODO API call
    this.props.onSubmit(this.state.term);
  }

  
  render() {
    return (
      <div className="search-bar ui segment" style={{marginTop: '1rem'}}>
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label htmlFor="Search">Video Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.inputHandler}
            />
          </div>
        </form>
      </div>
    )
  }
}
