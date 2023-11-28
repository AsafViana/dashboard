import { auth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, browserLocalPersistence } from '../../../service/firebase'

const handleSignIn = (email, senha, lembrar) => {
	if (lembrar) {
		setPersistence(auth, browserLocalPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, senha)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message

				console.log(errorMessage)
			})
	} else {
		setPersistence(auth, browserSessionPersistence)
			.then(() => {
				return signInWithEmailAndPassword(auth, email, senha)
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code
				const errorMessage = error.message

				console.log(errorMessage)
			})
	}
}

export { handleSignIn }
