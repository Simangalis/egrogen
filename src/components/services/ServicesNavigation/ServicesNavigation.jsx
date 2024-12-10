import  { useState, useEffect } from 'react';
import './ServicesNavigation.css';

export default function ServicesNavigation({
    tabs = [],
    onChange,
}) {
    const [active, setActive] = useState("Electrical"); // Default to "Electrical"

    useEffect(() => {
        if (onChange) {
            onChange(active);
        }
    }, [active, onChange]);

    return (
        <div className='services__navigation'>
            {tabs.map((name) => (
                <button
                    onClick={() => setActive(name)}
                    className={`${active === name ? 'active' : ''}`}
                    key={name}
                >
                    {name}
                </button>
            ))}
        </div>
    );
}
