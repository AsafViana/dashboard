import { useEffect } from 'react'
import { signOut, auth } from '../../service/firebase'
import { useNavigate } from 'react-router-dom'

export default function index() {
	const navigate = useNavigate()

	useEffect(() => {
		signOut(auth).then(() => {
			navigate('/sign-in')
		})
	}, [])

	return <></>
}
