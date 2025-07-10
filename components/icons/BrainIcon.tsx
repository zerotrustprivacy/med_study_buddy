
import React from 'react';

const BrainIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        {...props}
    >
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v1.2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5A2.5 2.5 0 0 1 17 2h.5a2.5 2.5 0 0 1 2.5 2.5v1.2a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V4.5A2.5 2.5 0 0 1 24.5 2"/>
        <path d="M4.5 2A2.5 2.5 0 0 0 2 4.5v1.2a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V4.5A2.5 2.5 0 0 0-2.5 2"/>
        <path d="M14 11.5a2.5 2.5 0 0 0 2.5-2.5V8a4 4 0 0 0-4-4h-1a4 4 0 0 0-4 4v1a2.5 2.5 0 0 0 2.5 2.5"/>
        <path d="M12 13.5a2.5 2.5 0 0 1-2.5 2.5V17a4 4 0 0 1 4 4h1a4 4 0 0 1 4-4v-1a2.5 2.5 0 0 1-2.5-2.5"/>
        <path d="M10 11.5a2.5 2.5 0 0 1-2.5-2.5V8a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1a2.5 2.5 0 0 1-2.5 2.5"/>
        <path d="M12 13.5a2.5 2.5 0 0 0 2.5 2.5V17a4 4 0 0 0-4 4h-1a4 4 0 0 0-4-4v-1a2.5 2.5 0 0 0 2.5-2.5"/>
        <path d="M12 22v-2"/>
        <path d="M12 4V2"/>
        <path d="M4.929 4.929l1.414 1.414"/>
        <path d="M17.657 17.657l1.414 1.414"/>
        <path d="M4.929 19.071l1.414-1.414"/>
        <path d="M17.657 6.343l1.414-1.414"/>
    </svg>
);

export default BrainIcon;
