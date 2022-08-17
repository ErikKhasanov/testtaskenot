import React from 'react';
import {
	QueryClient,
	QueryClientProvider,
	useQuery,
} from 'react-query';
import {ThemeProvider, createTheme} from '@mui/material/styles';
import {CssBaseline} from "@mui/material";
import ReactDOM from 'react-dom/client';

import App from './App';

const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'& body, #root': {
					height: '100vh'
				},
				'& #root': {
					display: 'flex'
				}
			}
		}
	},
	palette: {
		background: {
			default: '#121212'
		}
	}
})

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<CssBaseline/>
			<QueryClientProvider client={queryClient}>
				<App/>
			</QueryClientProvider>
		</ThemeProvider>
	</React.StrictMode>
);