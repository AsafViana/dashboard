import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import ToggleButton from '@mui/material/ToggleButton'
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup'
import SvgIcon from '@mui/material/SvgIcon'

// Importe o ícone SVG
import { ReactComponent as Meta } from './icon/meta.svg'
import { ReactComponent as GoogleIcon } from './icon/google-icon.svg'
import { ReactComponent as Linx } from './icon/linx.svg'

const ServicosToggle = () => {
	const [alignment, setAlignment] = React.useState('left')
	const handleAlignment = (event, newAlignment) => {
		setAlignment(newAlignment)
	}

	return (
		<Grid>
			<ToggleButtonGroup size='medium' value={alignment} exclusive onChange={handleAlignment} aria-label='text alignment'>
				<ToggleButton value='left' aria-label='left aligned'>
					<SvgIcon fontSize='large' color='#'>
						<Meta />
					</SvgIcon>
				</ToggleButton>
				<ToggleButton value='center' aria-label='centered'>
					<SvgIcon fontSize='large'>
						<GoogleIcon />
					</SvgIcon>
				</ToggleButton>
				<ToggleButton value='right' aria-label='right aligned'>
					<SvgIcon fontSize='large'>
						<Linx />
					</SvgIcon>
				</ToggleButton>
			</ToggleButtonGroup>
		</Grid>
	)
}

export default ServicosToggle
