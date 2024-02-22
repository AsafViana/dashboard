import { auth, createUserWithEmailAndPassword, updateProfile, addDoc, collection, db } from '../../../service/firebase'

const handleSignUp = (nome, email, senha) => {
	createUserWithEmailAndPassword(auth, email, senha)
		.then(async (user) => {
				localStorage.setItem('email', email)
				localStorage.setItem('senha', senha)
			updateProfile(user.user, { displayName: formatarNomeProprio(nome) })

			const uid = user.user.uid

			try {
				const docRef = await addDoc(collection(db, 'usuarios'), {
					nome: formatarNomeProprio(nome),
					email: email,
					uid: uid,
				})
			} catch (e) {
				alert('Erro na criação do perfil')
				console.log(e)
			}
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

export { handleSignUp }
