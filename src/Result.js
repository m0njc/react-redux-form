import React, { Component } from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class Result extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render(){
    const { total } = this.props
    const res = total ? <div>the result is :{total}</div> : null
    return (
      res
    )
  }
}

Result.propTypes = {
  total: PropTypes.string,
}
function mapStateToProps(state, ownProps) {
    return {
      total: state.result.total,
    };
  }

export default connect(mapStateToProps)(Result);
