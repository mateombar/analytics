import * as React from "react"

export const Instagram = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="footer__icons footer__icons--instagram"
            {...props}
        >
            <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h0" />
        </svg>
    )
}