import PropTypes from 'prop-types';

export default function Button( {loadMore}) {


        return (
            <button onClick={loadMore} className="Button">Load more</button>
        )
    }


Button.propTypes = {
    loadMore: PropTypes.func.isRequired,
}