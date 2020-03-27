import React from 'react';

import { Link } from 'react-router-dom';

import './styles.css';

import imgLogo from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgLogo} alt="Be the Hero" />
                <span>Bem vinda APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>

            </header>
        </div>
    );
}