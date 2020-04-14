import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchOrders } from './../../actions/index';

import './orders.scss';

function SignIn(props) {
  useEffect(() => {
    props.fetchOrders();
  }, []);
  console.log(props.orders);
  return <div className="container">I am Orders Component</div>;
}

function mapStateToProps(state) {
  const { orders } = state;
  return { orders };
}

export default connect(mapStateToProps, { fetchOrders })(SignIn);
