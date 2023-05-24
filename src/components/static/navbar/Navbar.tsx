import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { useDispatch } from "react-redux";
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';
import Logo from '../../../assets/img/CodeQueen.png'
import './Navbar.css'

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(''));
        toast.info('Usuário deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        navigate('/login')
    }

    var navbarComponent;

    if (token != "") {
        navbarComponent = <AppBar style={{ backgroundColor: "#202024" }} position="static">
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
                    <Link to="/posts" className="text-decorator-none">
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                postagens
                            </Typography>
                        </Box>
                    </Link>
                    <Box p={1} mx={1}>
                        <Typography variant="h6" color="initial">
                            •
                        </Typography>
                    </Box>
                    <Link to="/temas" className="text-decorator-none">
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                temas
                            </Typography>
                        </Box>
                    </Link>
                    <Box p={1} mx={1}>
                        <Typography variant="h6" color="initial">
                            •
                        </Typography>
                    </Box>
                    <Link to="/formularioTema" className="text-decorator-none">
                        <Box p={1} mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="initial">
                                cadastrar tema
                            </Typography>
                        </Box>
                    </Link>
                    <Box p={1} mx={1}>
                        <Typography variant="h6" color="initial">
                            •
                        </Typography>
                    </Box>
                    <Link to='/login' className='text-decorator-none'>
                        <Box p={1} mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                            <Typography variant="h6" color="initial">
                                logout
                            </Typography>
                        </Box>
                    </Link>
                </Box>

            </Toolbar>
        </AppBar >
    }
    return (
        <>
            {navbarComponent}
        </>
    )
}

export default Navbar;