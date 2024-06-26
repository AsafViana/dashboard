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

/**
  All of the routes for the Material Dashboard 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav.
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that has other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Material Dashboard 2 React layouts
import MetaFranqueadoraCampanha from 'layouts/MetaFranqueadoraCampanha'
import MetaFranqueadoraAdset from 'layouts/MetaFranqueadoraAdset'
import MetaFranquiaCampanha from 'layouts/MetaFranquiasCampanha'
import MetaFranquiaAdset from 'layouts/MetaFranquiasAdset'
import Google from 'layouts/Google/Google'
import Linx from 'layouts/Linx'
import Profile from 'layouts/profile'
import SignIn from 'layouts/authentication/sign-in'
import SignUp from 'layouts/authentication/sign-up'
import Logout from 'layouts/Logout/index'

// @mui icons
import Icon from '@mui/material/Icon'
import { ReactComponent as MetaIcon } from './components/ServicosToggle/icon/meta.svg'
import { ReactComponent as GoogleIcon } from './components/ServicosToggle/icon/google-icon.svg'
import { ReactComponent as LinxIcon } from './components/ServicosToggle/icon/linx.svg'
import SvgIcon from '@mui/material/SvgIcon'

const routes = [
	/* {
		type: 'collapse',
		name: 'Dashboard',
		key: 'dashboard',
		icon: <Icon fontSize='small'>dashboard</Icon>,
		route: '/dashboard',
		component: <Dashboard />,
	}, */

	{
	  type: 'collapse',
	  name: 'Linx',
	  key: 'linx',
	  icon: (
		  <SvgIcon fontSize='medium'>
			  <LinxIcon />
		  </SvgIcon>
	  ),
	  route: '/linx',
	  component: <Linx />,
  	},
	/* { type: 'divider' },
	{ type: 'title', title: 'Adsets' },
	{
		type: 'collapse',
		name: 'Meta Franqueadora',
		key: 'meta-franqueadora-adset',
		icon: (
			<SvgIcon fontSize='medium'>
				<MetaIcon />
			</SvgIcon>
		),
		route: '/meta-franqueadora-adset',
		component: <MetaFranqueadoraAdset />,
	},
	{
		type: 'collapse',
		name: 'Meta Franquias',
		key: 'meta-franquias-adset',
		icon: (
			<SvgIcon fontSize='medium'>
				<MetaIcon />
			</SvgIcon>
		),
		route: '/meta-franquias-adset',
		component: <MetaFranquiaAdset />,
	},
	{ type: 'title', title: 'Campanhas' },
	{
		type: 'collapse',
		name: 'Meta Franqueadora',
		key: 'meta-franqueadora-campanha',
		icon: (
			<SvgIcon fontSize='medium'>
				<MetaIcon />
			</SvgIcon>
		),
		route: '/meta-franqueadora-campanha',
		component: <MetaFranqueadoraCampanha />,
	},
	{
		type: 'collapse',
		name: 'Meta Franquias',
		key: 'meta-franquias-campanha',
		icon: (
			<SvgIcon fontSize='medium'>
				<MetaIcon />
			</SvgIcon>
		),
		route: '/meta-franquias-campanha',
		component: <MetaFranquiaCampanha />,
	},
	{ type: 'divider' },
	{
		type: 'collapse',
		name: 'Google',
		key: 'google',
		icon: (
			<SvgIcon fontSize='large'>
				<GoogleIcon />
			</SvgIcon>
		),
		route: '/google',
		component: <Google />,
	}, */
	{ type: 'divider' },
	/*{
		type: 'collapse',
		name: 'Notifications',
		key: 'notifications',
		icon: <Icon fontSize='small'>notifications</Icon>,
		route: '/notifications',
		component: <Notifications />,
	},*/
	{
		type: 'fora',
		name: 'Profile',
		key: 'profile',
		icon: <Icon fontSize='small'>person</Icon>,
		route: '/profile',
		component: <Profile />,
	},
	{
		type: 'vermelho',
		name: 'Logout',
		key: 'logout',
		icon: <Icon fontSize='small'>logout</Icon>,
		route: '/logout',
		component: <Logout />,
	},
	{
		type: 'fora',
		name: 'Sign In',
		key: 'sign-in',
		icon: <Icon fontSize='small'>login</Icon>,
		route: '/sign-in',
		component: <SignIn />,
	},
	{
		type: 'fora',
		name: 'Sign Up',
		key: 'sign-up',
		icon: <Icon fontSize='small'>assignment</Icon>,
		route: '/sign-up',
		component: <SignUp />,
	},
	,
]

export default routes
