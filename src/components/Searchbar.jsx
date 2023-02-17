import React, { useState } from "react"
import { ImSearch } from 'react-icons/im';
import Notiflix from "notiflix";
import PropTypes from 'prop-types';
export default function Searchbar({ onSubmit }) {

    const [photoName, setphotoName] = useState('');


    const onChange = e => {
        setphotoName(e.target.value.toLowerCase())
    }


    const onFormSubmit = e => {
        e.preventDefault();

        if (photoName.trim() === '') {
            Notiflix.Notify.info('Please type some letters');
            return;
        }
        onSubmit(photoName);
    }

    return (
        <header className="Searchbar" >
            <form onSubmit={onFormSubmit} className="SearchForm">
                <button type="submit" className="SearchForm-button">
                    <ImSearch />
                    <span className="SearchForm-button-label">Search</span>
                </button>

                <input
                    className="SearchForm-input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    value={photoName}
                    onChange={onChange}
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
}

Searchbar.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}