import React from 'react';

import { Link } from 'react-router-dom';

import { FiPower } from 'react-icons/fi'

import './styles.css';

import imgLogo from '../../assets/logo.svg'

export default function Profile() {
    return (
        <div className="profile-container">
            <header>
                <img src={imgLogo} alt="Be the Hero" />
                <span>Bem vinda APAD</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower style={{ size: 18, color: "#E02041", }} />
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                <li>
                    <strong>Caso:</strong>
                    <p>Caso teste</p>
                    <strong>Descrição</strong>
                </li>
            </ul>
        </div>
    );
}