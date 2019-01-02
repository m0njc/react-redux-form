import React, { Component } from 'react';
import Form from './Form.js';
import Result from './Result.js';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { fetchZero } from './actions'

class App extends Component {
	constructor(props) {
    super(props)
    this.state = {

    }
  }
	fetchZeroCounter = (values) => {
		this.props.fetchZero(values)
	}

  render() {
    return (
			<div>
			<Form onSubmit={this.fetchZeroCounter} />
			<Result />
			</div>
		)
  }
}

App.propTypes = {
  fetchZero: PropTypes.func,
}

function mapStateToProps(state, ownProps) {
	return state
}

function mapDispatchToProps(dispatch) {
		return {
        fetchZero: (params) => {
            dispatch(fetchZero(params))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);
