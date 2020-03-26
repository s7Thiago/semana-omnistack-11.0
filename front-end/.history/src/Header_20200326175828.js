import React from 'react';

export default function Header(children, props) {
    return (
        <header>
            <div>
                <h1>{children}</h1>
                <h1>{props.title}</h1>
            </div>


        </header>
    )
}