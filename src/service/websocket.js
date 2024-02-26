import React, { useEffect } from 'react'
import useWebSocket from 'react-use-websocket'
import PropTypes from 'prop-types'

const port = process.env.REACT_APP_PORT_WEBSOCKET
const host = process.env.REACT_APP_HOST_WEBSOCKET

const WsConnector = ({ onUpdate }) => {
	const ws = useWebSocket(`ws://${host}:${port}`)

	return null
}

WsConnector.propTypes = {
	onUpdate: PropTypes.func.isRequired,
}

export default WsConnector
