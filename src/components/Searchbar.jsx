import React from "react"
import { ImSearch } from 'react-icons/im';
import Notiflix from "notiflix";
import PropTypes from 'prop-types';
export class Searchbar extends React.Component {

    state = {
        photoName: ''
    }

    onChange = e => {
        this.setState({
            photoName: e.currentTarget.value.toLowerCase()
        });
    }

    onSubmit = e => {
        e.preventDefault();

        if (this.state.photoName.trim() === '') {
            Notiflix.Notify.info('Please type some letters');
            return;
        }

        this.props.onSubmit(this.state.photoName);
    }

    render() {

        return (
            <header className="Searchbar" >
                <form onSubmit={this.onSubmit} className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <ImSearch />
                        <span className="SearchForm-button-label">Search</span>
                    </button>

                    <input
                        className="SearchForm-input"
                        type="text"
                        autoComplete="off"
                        autoFocus
                        value={this.state.photoName}
                        onChange={this.onChange}
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}