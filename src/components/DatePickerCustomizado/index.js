import * as React from 'react'
import { DatePicker, DatePickerToolbar } from '@mui/x-date-pickers/DatePicker'
import StaticDatePicker from '@mui/x-date-pickers/StaticDatePicker'
import { TextField } from '@mui/material'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import { styled } from '@mui/system'
import PropTypes from 'prop-types'

export default function DatePickerCustomizado(props) {
	const { value, onChange } = props

	const Calendar = styled(CalendarMonthIcon)({
		color: '#f1f1f1',
	})

	const StyledToolbar = styled(DatePickerToolbar)({
			color: '#f8bbd0',
			borderRadius: 2,
			borderWidth: 1,
			borderColor: '#e91e63',
			border: '1px solid',
			backgroundColor: '#880e4f',
	})

	const StyledStaticDatePicker = styled(StaticDatePicker)({
		'.MuiDateCalendar-root': {
			color: '#bbdefb',
			borderRadius: 15,
			borderWidth: 2,
			borderColor: '#2196f3',
			border: '2px solid',
			backgroundColor: '#0d47a1',
		}
	})


	return (
		<>
			{/* <DatePicker
			sx={{
				marginY: 3,

			}}
				slotProps={{
					actionBar: {
						actions: ['today'],
					},
				}}

				format='DD/MM/YYYY'
				value={value}
				onChange={(newValue) => onChange(newValue)}
				renderInput={(params) => <TextField {...params} />}
				components={{
					OpenPickerIcon: Calendar,
				}}
			/> */}
			<StyledStaticDatePicker/>
		</>
	)
}

DatePickerCustomizado.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
}
