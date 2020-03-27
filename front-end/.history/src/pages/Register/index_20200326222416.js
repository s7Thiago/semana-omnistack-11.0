import React from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import logoImg from '../../assets/logo.svg';

export default function Register() {
    return (
        <div className="register-container">
            <div className="conent">
                <section>
                    <img src={logoImg} alt="Be the Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="back-link" to="/register">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                        </Link>
                </section>

                <form>
                    <input placeholder="Nome da ONG" />
                </form>
            </div>
        </div>
    );
}