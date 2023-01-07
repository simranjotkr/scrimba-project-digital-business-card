import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';


export default function Footer() {
    return (
        <footer className='app-footer-container'>
            <Button href='https://twitter.com/simranjotkr'><TwitterIcon  sx={{ color: grey[500] }} /></Button>
            <Button href='https://www.facebook.com/tanejasimranjot/'><FacebookIcon sx={{ color: grey[500] }} /></Button>
            <Button href='https://www.instagram.com/simranjotkr/'><InstagramIcon sx={{ color: grey[500] }} /></Button>
            <Button href='https://github.com/simranjotkr'><GitHubIcon sx={{ color: grey[500] }} /></Button>
        </footer>
    )
}