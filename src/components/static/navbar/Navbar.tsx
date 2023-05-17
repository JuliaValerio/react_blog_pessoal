import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Box } from '@mui/material'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/img/CodeQueen.png'
import './Navbar.css'

function Navbar() {
    return (
        <>
            <AppBar style={{ backgroundColor: "#202024" }} position="static">
                <Toolbar variant="dense">
                    <Box style={{ cursor: "pointer" }} >
                        <img src={Logo} style={{ width: "30%" }} />
                    </Box>

                    <Box style={{ width: '100%' }} display="flex" justifyContent="center">
                        <Link to='/home' className='text-decorator-none'>
                            <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="initial">
                                    home
                                </Typography>
                            </Box>
                        </Link>
                        <Box p={1} mx={1}>
                            <Typography variant="h6" color="initial">
                                •
                            </Typography>
                        </Box>
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                postagens
                            </Typography>
                        </Box>
                        <Box p={1} mx={1}>
                            <Typography variant="h6" color="initial">
                                •
                            </Typography>
                        </Box>
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                temas
                            </Typography>
                        </Box>
                        <Box p={1} mx={1}>
                            <Typography variant="h6" color="initial">
                                •
                            </Typography>
                        </Box>
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box p={1} mx={1}>
                            <Typography variant="h6" color="initial">
                                •
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                                <Typography variant="h6" color="initial">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar;