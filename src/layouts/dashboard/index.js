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
import CircularProgress from '@mui/material/CircularProgress'
import ServicosToggle from '../../components/ServicosToggle'
import Meta from '../MetaFranquiasCampanha/MetaFranquias'
import reportsLineChartData from 'layouts/dashboard/data/reportsLineChartData'
import { campanhaFranquias } from '../../service/database'

export default function Dashboard() {
	const [CampanhasFranquias, setCampanhasFranquias] = useState([])
	const [Loaded, setLoaded] = useState(false)
	const { sales, tasks } = reportsLineChartData

	useEffect(() => {
		campanhaFranquias().then((obj) => {
			setCampanhasFranquias(obj)
		})

		if (CampanhasFranquias) {
			setLoaded(true)
		}
	}, [CampanhasFranquias])

	return (
		<Grid container justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
			<ServicosToggle />
			<Meta />
		</Grid>
	)
}
