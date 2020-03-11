import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
// import { userRegisterAsync } from "../actions/index";
import { ADD } from "../actions/index";
// import * as actionCreators from "./actions/index";

function TestRedux(props) {
  console.log(props);
  return (
    <>
      <h1>Hello{props.initialstate}</h1>
      <button onClick={() => props.ADD(10)}>+</button>
      <button>-</button>
    </>
  );
}

// 取得Redux中isAuth的值
const mapStateToProps = store => {
  return { initialstate: store.test };
};

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators({ ADD }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(TestRedux);
