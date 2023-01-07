import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import LinkedIn from '@mui/icons-material/LinkedIn'
import Download from '@mui/icons-material/Download'
import resume from '../assets/Simranjot_Kaur.pdf'

const DownloadButton = styled(Button) ({
    backgroundColor: '#FFFFFF',
    color: '#374151'
})
export default function ContactButton() {
    return (
        <div className='app-contact-button-container'>
            <DownloadButton download href={resume} className='contact-button-email-button' variant='contained' startIcon={<Download />}>Resume</DownloadButton>
            <Button className='contact-button-linkedin-button' variant='contained' startIcon={<LinkedIn />} href='https://www.linkedin.com/in/simranjotkr'>LinkedIn</Button>
        </div>
    )
}