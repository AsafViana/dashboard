/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import React, { useState, useCallback, useEffect } from 'react'

// @mui material components
import Grid from '@mui/material/Grid'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'

// Material Dashboard 2 React example components
import DashboardLayout from 'examples/LayoutContainers/DashboardLayout'
import DashboardNavbar from 'examples/Navbars/DashboardNavbar'
import Footer from 'examples/Footer'
import ReportsBarChart from 'examples/Charts/BarCharts/ReportsBarChart'
import ReportsLineChart from 'examples/Charts/LineCharts/ReportsLineChart'
import ComplexStatisticsCard from 'examples/Cards/StatisticsCards/ComplexStatisticsCard'

// Data
import reportsBarChartData from 'layouts/dashboard/data/reportsBarChartData'
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData'
import { clicksPorMes, adsetQuantidade, gastosPorMes } from './controller.js'

// Dashboard components
import Projects from 'layouts/dashboard/components/Projects'
import OrdersOverview from 'layouts/dashboard/components/OrdersOverview'

import dayjs from 'dayjs'
import DatePicker from '../../components/DatePickerCustomizado'

export default function index() {
	const [DataFormatada, setDataFormatada] = useState('')
	const [selectedDate, setSelectedDate] = useState()
	const [AdsetQuantidade, setAdsetQuantidade] = useState(0)
	const [GastoPorMes, setGastoPorMes] = useState({})
	const [ClicksPorMes, setClicksPorMes] = useState({})


	useEffect(() => {
		setDataFormatada(dayjs(new Date()).format('YYYY-MM-DD'))

		adsetQuantidade(DataFormatada).then((val) => {
			setAdsetQuantidade(val)
		})

		clicksPorMes(DataFormatada).then((value) => {
			setClicksPorMes(value)
		})

		gastosPorMes(DataFormatada).then((val) => {
			setGastoPorMes(val)
		})

		if (!!selectedDate){
			const dateFormat = "YYYY-MM-DD"
			const formattedDate = dayjs(selectedDate).format(dateFormat)
			setDataFormatada(formattedDate)
		}
	}, [selectedDate])


	return (
		<DashboardLayout>
			<DashboardNavbar />
			<DatePicker value={selectedDate} onChange={setSelectedDate}/>
			<MDBox py={3}>
				<Grid container spacing={3}>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color='dark'
								icon='weekend'
								title='Numero de campanhas'
								count={AdsetQuantidade}
								percentage={{
									color: 'success',
									amount: '+55%',
									label: 'than lask week',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								icon='leaderboard'
								title="Today's Users"
								count='2,300'
								percentage={{
									color: 'success',
									amount: '+3%',
									label: 'than last month',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color='success'
								icon='store'
								title='Revenue'
								count='34k'
								percentage={{
									color: 'success',
									amount: '+1%',
									label: 'than yesterday',
								}}
							/>
						</MDBox>
					</Grid>
					<Grid item xs={12} md={6} lg={3}>
						<MDBox mb={1.5}>
							<ComplexStatisticsCard
								color='primary'
								icon='person_add'
								title='Followers'
								count='+91'
								percentage={{
									color: 'success',
									amount: '',
									label: 'Just updated',
								}}
							/>
						</MDBox>
					</Grid>
				</Grid>
				<MDBox mt={4.5}>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsBarChart color='info' title='Gastos' description='Gastos das campanhas do ultimos meses' date='campaign sent 2 days ago' chart={reportsBarChartData} />
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsLineChart color='success' title='gastos' description='Gastos dos campanhas do ultimos meses' date='atualizado agora' chart={GastoPorMes} />
							</MDBox>
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<MDBox mb={3}>
								<ReportsLineChart color='dark' title='clicks por mês' description='Somatório da quantidade de clicks de cada mês' date='atualizado agora' chart={ClicksPorMes} />
							</MDBox>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox>
					<Grid container spacing={3}>
						<Grid item xs={12} md={6} lg={8}>
							<Projects />
						</Grid>
						<Grid item xs={12} md={6} lg={4}>
							<OrdersOverview />
						</Grid>
					</Grid>
				</MDBox>
			</MDBox>
			<Footer />
		</DashboardLayout>
	)
}
