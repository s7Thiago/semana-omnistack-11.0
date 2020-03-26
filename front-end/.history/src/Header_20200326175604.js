import React from 'react';

export default function Header({ children, props }) {
    return (
        <header>
            <div>

                <h1>{children}</h1>
            </div>


        </header>
    )
}