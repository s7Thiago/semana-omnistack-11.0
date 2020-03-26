import React from 'react';

export default function Header({ children, title }) {
    return (
        <header>
            <h1>
                <h1>{title}</h1>
                <h6>{children}</h6>
            </h1>
        </header>
    )
}