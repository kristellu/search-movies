import React from 'react';
import { ButtonBackToHome } from '../components/ButtonBackToHome';

export const NotFound = ()  =>(
    <div>
        <h1 style={{color: '#000', fontSize:30 }}>404!</h1>
        <h2>Page not found.</h2>
        <ButtonBackToHome/>
    </div>
)
