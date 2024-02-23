import React, { useState, useCallback, useEffect } from 'react'

// Componentes do Material-UI
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'


// Componentes do Material Dashboard 2 React
import MDBox from 'components/MDBox'

// Componentes de exemplo do Material Dashboard 2 React
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Controlador
import { GetLojas, GetDadosLojas } from './controller'

export default function Index() {
	const [Selecionado, setSelecionado] = useState('todos')
	const [Lojas, setLojas] = useState([])
	const [DadosDasLojas, setDadosDasLojas] = useState([])
	const [Datas, setDatas] = useState([])

	const handleSelecionado = (selecionado) => {
		setDadosDasLojas({})
		setSelecionado(selecionado)
	}

	useEffect(() => {
		GetLojas().then(setLojas)
	}, [Lojas])

	useEffect(() => {
		GetDadosLojas(Selecionado , Datas).then((dados) => {
			setDadosDasLojas(dados)
			console.log(dados)
		})
	}, [Selecionado, Datas])

	if (!!Lojas || !!DadosDasLojas) {
		if (Selecionado === 'todos') {
			return (
				<DashboardLayout>
					<DashboardNavbar selectDados={Lojas} valueSelect={Selecionado} onChangeSelect={handleSelecionado} onChangeData={setDatas} />
					<Stack marginTop={5} marginBottom={3} justifyContent='space-around' alignItems='center' direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
						<Typography variant='h2' gutterBottom fontWeight={20}>
							Faturamento total:
						</Typography>
						<Typography variant='h2' gutterBottom>
							{DadosDasLojas.somatorio_total}
						</Typography>
					</Stack>
					<Stack spacing={{ xs: 3, sm: 10 }} direction='row' useFlexGap flexWrap='wrap' py={30} ustifyContent='space-around' alignItems='center' sx={{ justifyContent: 'center', paddingTop: 3 }}>
						{DadosDasLojas.map(([chave, valor]) => {
							if (chave !== 'somatorio_total') {
								return (
									<Stack key={chave} spacing={2} sx={{ justifyContent: 'center' }}>
										<Button sx={{ alignItems: 'center' }} variant='text' onClick={() => handleSelecionado(valor.cnpj)}>
											<Grid item xs={12} md={6}>
												<MDBox mb={1.5}>
													<ComplexStatisticsCard
														quantidade={valor.quantidade_vendas}
														title='Total das vendas'
														count={valor.total_vendas}
														percentage={{
															label: chave,
														}}
													/>
												</MDBox>
											</Grid>
										</Button>
									</Stack>
								)
							}
						})}
					</Stack>
				</DashboardLayout>
			)
		} else {
			return (
				<DashboardLayout>
					<DashboardNavbar selectDados={Lojas} valueSelect={Selecionado} onChange={handleSelecionado} />
					<Box py={3} sx={{ alignItems: 'center', width: '100%' }}>
						<Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: '', width: '100%' }}>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										color='dark'
										icon='leaderboard'
										title='Quantidade de Vendas totais'
										count={DadosDasLojas.quantidade_vendas}
										percentage={{
											label: `Dados do dia ${DadosDasLojas.data}`,
										}}
									/>
								</MDBox>
							</Grid>
							<Grid item xs={12} md={6} lg={3}>
								<MDBox mb={1.5}>
									<ComplexStatisticsCard
										icon='leaderboard'
										title='Valor total das vendas'
										count={DadosDasLojas.total_vendas}
										percentage={{
											label: 'Dados do dia ' + DadosDasLojas.data,
										}}
									/>
								</MDBox>
							</Grid>
						</Grid>
					</Box>
				</DashboardLayout>
			)
		}
	} else {
		return (
			<DashboardLayout>
				<DashboardNavbar selectDados={Lojas} valueSelect={Selecionado} onChange={setSelecionado} />
				<Grid container justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
					<CircularProgress color='info' />
				</Grid>
			</DashboardLayout>
		)
	}
}
