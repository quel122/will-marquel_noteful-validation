import React from 'react'
import './NotefulForm.css'
import PropTypes from 'prop-types'
import { prototype } from 'enzyme-adapter-react-16'

export default function NotefulForm(props) {
  const { className, ...otherProps } = props
  return (
    <form
      className={['Noteful-form', className].join(' ')}
      action='#'
      {...otherProps}
    />
  )
}

NotefulForm.propTypes = {
  className: PropTypes.string.isRequired
}
