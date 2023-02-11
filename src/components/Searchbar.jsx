import React from "react"
import { ImSearch } from 'react-icons/im';
import Notiflix from "notiflix";

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
        this.setState({
            photoName: ''
        })
    }
    render() {

        return (
            <header className="searchbar" >
                <form onSubmit={this.onSubmit} className="form">
                    <button type="submit" className="button">
                        <ImSearch />
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
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