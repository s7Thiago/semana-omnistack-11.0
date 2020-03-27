import React from 'react';

import './styles.css';

import imgLogo from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgLogo} alt="Be the Hero" />
            </header>
        </div>
    );
}