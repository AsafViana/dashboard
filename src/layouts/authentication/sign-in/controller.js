import { auth, signInWithEmailAndPassword, browserSessionPersistence, setPersistence, browserLocalPersistence, googleProvider, signInWithPopup, addDoc, collection, db } from '../../../service/firebase'

const handleSignIn = (email, senha, lembrar, navigate) => {
	const onSuccess = () => {
		alert('logado')
		localStorage.setItem('email', email)
		localStorage.setItem('senha', senha)
		navigate('/meta-franqueadora-adset')
	}

	const onError = (error) => {
		const errorCode = error.code
		const errorMessage = error.message
		console.log(errorMessage)
	}

	if (lembrar) {
		setPersistence(auth, browserLocalPersistence)
			.then(() => signInWithEmailAndPassword(auth, email, senha))
			.then(onSuccess)
			.catch(onError)
	} else {
		setPersistence(auth, browserSessionPersistence)
			.then(() => signInWithEmailAndPassword(auth, email, senha))
			.then(onSuccess)
			.catch(onError)
	}
}

const handleSignInGoogle = (navigate) => {
		signInWithPopup(auth, googleProvider)
			.then(async (user) => {
				try {
					const uid = user.user.uid
					const docRef = await addDoc(collection(db, 'usuarios'), {
						nome: user.user.displayName,
						email: user.user.email,
						uid: uid,
					})
					navigate('/meta-franqueadora-adset')
					console.log({
						nome: user.user.displayName,
						email: user.user.email,
						uid: uid,
				})
				} catch (e) {
					navigate('/')
					alert('Erro na criação do perfil')
					console.log(e)
				}
			})
			.catch((error) => {
				const errorCode = error.code
				const errorMessage = error.message
				console.log(errorMessage)
			})
}

export { handleSignIn, handleSignInGoogle, auth }
