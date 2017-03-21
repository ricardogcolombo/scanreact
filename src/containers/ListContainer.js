import React, {
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import List from "../components/List";
import store from '../store';
import '../styles/List.css';


class ListContainer extends Component {
    onItemClick(id) {
        this.props.onItemSelected(id)
    }

    render() {
        let items = (this.props.config.productList.results) ? this.props.config.productList.results : [];

        return (
            <List items={items} onItemClick={this.onItemClick.bind(this)}/>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        config: {
            product: state.product,
            productList: state.productList
        }
    };
}

export default connect(mapStateToProps)(ListContainer);
