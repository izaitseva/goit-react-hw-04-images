import { Component } from "react"
import PropTypes from 'prop-types';

export class Button extends Component {

    render() {

        return (
            <button onClick={this.props.loadMore} className="Button">Load more</button>
        )
    }
}


Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}