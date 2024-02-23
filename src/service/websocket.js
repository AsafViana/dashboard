/* const WebSocket = require('ws')

const port = process.env.REACT_APP_PORT_WEBSOCKET
const host = process.env.REACT_APP_HOST_WEBSOCKET
console.log(port)
const socket = new WebSocket(`ws://${host}:${port}`)

export function ouvindoClientes(resposta, callback) {
	socket.addEventListener('open', (event) => {
		socket.send('Connection established')
		socket.send(resposta)
	})

	// Listen for messages
	socket.addEventListener('message', callback)
}
 */

import useWebSocket, { ReadyState } from 'react-use-websocket'

const WS_URL = 'ws://127.0.0.1:8000'
const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(WS_URL)

export {
	sendJsonMessage,
	lastJsonMessage,
	readyState
}
