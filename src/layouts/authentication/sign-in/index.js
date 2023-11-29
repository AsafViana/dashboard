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

import { useEffect, useState } from 'react'

// react-router-dom components
import { Link } from 'react-router-dom'

// @mui material components
import Card from '@mui/material/Card'
import Switch from '@mui/material/Switch'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'

// @mui icons
import FacebookIcon from '@mui/icons-material/Facebook'
import GitHubIcon from '@mui/icons-material/GitHub'
import GoogleIcon from '@mui/icons-material/Google'

// Material Dashboard 2 React components
import MDBox from 'components/MDBox'
import MDTypography from 'components/MDTypography'
import MDInput from 'components/MDInput'
import MDButton from 'components/MDButton'

// Authentication layout components
import BasicLayout from 'layouts/authentication/components/BasicLayout'

// Images
import bgImage from 'assets/images/bg-sign-in-basic.jpeg'

//Controller
import { handleSignIn, handleSignInGoogle, auth } from './controller'

import {useNavigate} from 'react-router-dom'

function Basic() {
	const [rememberMe, setRememberMe] = useState(false)
	const [Email, setEmail] = useState('')
	const [Senha, setSenha] = useState('')
	const [Disable, setDisable] = useState(true)

	const navigate = useNavigate()

	const handleSetRememberMe = () => setRememberMe(!rememberMe)

	useEffect(() => {
		if (!!Email && !!Senha) {
			setDisable(false)
		} else {
			setDisable(true)
		}
	}, [Email, Senha])

	return (
		<BasicLayout image={bgImage}>
			<Card>
				<MDBox variant='gradient' bgColor='info' borderRadius='lg' coloredShadow='info' mx={2} mt={-3} p={2} mb={1} textAlign='center'>
					<MDTypography variant='h4' fontWeight='medium' color='white' mt={1}>
						Sign in
					</MDTypography>
					<Grid container spacing={3} justifyContent='center' sx={{ mt: 1, mb: 2 }}>
						<Grid item xs={2}>
							<MDTypography component={MuiLink} href='#' variant='body1' color='white'>
								<FacebookIcon color='inherit' />
							</MDTypography>
						</Grid>
						<Grid item xs={2}>
							<MDTypography component={MuiLink} href='#' variant='body1' color='white'>
								<GitHubIcon color='inherit' />
							</MDTypography>
						</Grid>
						<Grid item xs={2}>
							<MDTypography onClick={() => handleSignInGoogle(navigate)} component={MuiLink} href='#' variant='body1' color='white'>
								<GoogleIcon color='inherit' />
							</MDTypography>
						</Grid>
					</Grid>
				</MDBox>
				<MDBox pt={4} pb={3} px={3}>
					<MDBox component='form' role='form'>
						<MDBox mb={2}>
							<MDInput value={Email} onChange={(e) => setEmail(e.target.value)} type='email' label='Email' fullWidth />
						</MDBox>
						<MDBox mb={2}>
							<MDInput value={Senha} onChange={(e) => setSenha(e.target.value)} type='password' label='Password' fullWidth />
						</MDBox>
						<MDBox display='flex' alignItems='center' ml={-1}>
							<Switch checked={rememberMe} onChange={handleSetRememberMe} />
							<MDTypography variant='button' fontWeight='regular' color='text' onClick={handleSetRememberMe} sx={{ cursor: 'pointer', userSelect: 'none', ml: -1 }}>
								&nbsp;&nbsp;Remember me
							</MDTypography>
						</MDBox>
						<MDBox mt={4} mb={1}>
							<MDButton disabled={Disable} onClick={() => handleSignIn(Email, Senha, rememberMe, navigate)} variant='gradient' color='info' fullWidth>
								sign in
							</MDButton>
						</MDBox>
						<MDBox mt={3} mb={1} textAlign='center'>
							<MDTypography variant='button' color='text'>
								Don&apos;t have an account?{' '}
								<MDTypography component={Link} to='/sign-up' variant='button' color='info' fontWeight='medium' textGradient>
									Sign up
								</MDTypography>
							</MDTypography>
						</MDBox>
					</MDBox>
				</MDBox>
			</Card>
		</BasicLayout>
	)
}

export default Basic
