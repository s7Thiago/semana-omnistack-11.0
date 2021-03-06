import React from 'react';

import { Link } from 'react-router-dom';

import { FiPower, FiTrash2 } from 'react-icons/fi'

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

                    <strong>Descrição:</strong>
                    <p>Descrição teste</p>

                    <strong>Valor:</strong>
                    <p>R$120,00</p>

                    <button type="button">
                        <FiTrash2 style={{ size=20, color= "#a8a8b3" }} />
                    </button>
                </li>
            </ul>
        </div>
    );
}