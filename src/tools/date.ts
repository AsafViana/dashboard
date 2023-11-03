const mesNumeroParaCursivo = (mes: string) => {
	const mesNumero = parseInt(mes.slice(-5, -3))
	switch (mesNumero) {
		case 1:
			return 'janeiro'
		case 2:
			return 'fevereiro'
		case 3:
			return 'março'
		case 4:
			return 'abril'
		case 5:
			return 'maio'
		case 6:
			return 'junho'
		case 7:
			return 'julho'
		case 8:
			return 'agosto'
		case 9:
			return 'setembro'
		case 10:
			return 'outubro'
		case 11:
			return 'novembro'
		case 12:
			return 'dezembro'
	}
}

function arredondarNumero(numero) {
	console.log(numero + '4')
	if (numero < 1e3) {
		return numero.toString()
	} else if (numero < 1e6) {
		return (numero / 1e3).toFixed(1) + ' mil'
	} else if (numero < 1e9) {
		return (numero / 1e6).toFixed(1) + ' mi'
	} else if (numero < 1e12) {
		return (numero / 1e9).toFixed(1) + ' bi'
	} else {
		return numero.toString() // Se for maior que 1 trilhão, retorna o número sem abreviação.
	}
}

export { mesNumeroParaCursivo, arredondarNumero }
