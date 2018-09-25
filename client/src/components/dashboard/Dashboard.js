import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getCurrentProfile } from '../../actions/profileActions'

class dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile()
  }
  render() {
    return <div>Dashboard</div>
  }
}
export default connect(
  null,
  { getCurrentProfile }
)(dashboard)
