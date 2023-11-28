import { auth, signInWithEmailAndPassword, updateProfile, addDoc, collection, db } from '../../../service/firebase'

const handleSignIn = (nome, email, senha) => {
	signInWithEmailAndPassword(auth, email, senha).then(async (user) => {

	})

	setPersistence(auth, browserSessionPersistence)
		.then(() => {
			// Existing and future Auth states are now persisted in the current
			// session only. Closing the window would clear any existing state even
			// if a user forgets to sign out.
			// ...
			// New sign-in will be persisted with session persistence.
			return signInWithEmailAndPassword(auth, email, password)
		})
		.catch((error) => {
			// Handle Errors here.
			const errorCode = error.code
			const errorMessage = error.message
		})
}

function formatarNomeProprio(nome) {
	const palavras = nome.split(' ')

	const palavrasFormatadas = palavras.map((palavra) => {
		// Capitaliza a primeira letra e mantém as demais minúsculas
		return palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()
	})

	// Junta as palavras formatadas de volta em uma string
	const nomeFormatado = palavrasFormatadas.join(' ')

	return nomeFormatado
}

export { handleSignIn }
