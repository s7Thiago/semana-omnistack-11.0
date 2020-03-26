import React from 'react';

export default function Header(props) {
    return (
        <header>
            <h1>
                <h1>{props.children}</h1>
                <h1>{props.title}</h1>
            </h1>
        </header>
    )
}