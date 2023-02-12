import { Component } from "react"

export class Button extends Component {


    loadMore = () => {
        this.setState(page => ({
            page: this.props.page + 1,
        }))
        console.log("check load more")
    }


    render() {
        return (
            <button onClick={this.loadMore} page={this.props.page} className="Button">Load more</button>
        )
    }
}