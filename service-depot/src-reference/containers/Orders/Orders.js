import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Order from '../../components/Order/Order';
import Spinner from '../../components/UI/Spinner/Spinner';
import * as orderActions from '../../store/actions/index';


class Orders extends Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        console.log(this.props.token);
        this.props.onFetchingOrders(this.props.token, this.props.userId);
    }

    render () {

        let orderList = <Spinner />;
        if (!this.props.loading) {
            orderList = this.props.orders.map( order => (
                <Order key={order.id} ingredients={order.ingredients} price={order.price}/>  
            ));
        }

        return (
            <div>
                {orderList}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.orders.orders,
        loading: state.orders.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchingOrders: (token, userId) => dispatch(orderActions.fetchOrders(token, userId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, Axios));