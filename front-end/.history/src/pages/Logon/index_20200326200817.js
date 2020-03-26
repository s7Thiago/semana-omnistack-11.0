import React from 'react';

import './styles.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

export default function Logon() {
    return (
        <div className="logon-container">
            <section className="form">
                {/* Logo */}
                <img src={logoImg} alt="Be the Hero" />

                {/* Formulário */}
                <form>
                    <h1>Faça seu logon</h1>
                    <input placeholder="Sua ID" />
                    <button type="submit"></button>
                </form>

            </section>
            <img src={heroesImg} alt='Heroes' />
        </div>


    );
}