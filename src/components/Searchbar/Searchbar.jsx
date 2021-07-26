import React, { Component } from 'react';
import { TiZoom } from "react-icons/ti";

class Searchbar extends Component {

    state = {
        query: '',
        
    };

    // https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

    searchQery = () => { };

    handleChange = (e) => {
        this.setState({ query: e.currentTarget.value });
    };

    handleSubmit = (e) => {
        e.prevntDefault();
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });

    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.query}
                    onChange={this.handleChange}
                />
                <button type="submit"><TiZoom /></button>
            </form>
        );
    }
};

export default Searchbar;