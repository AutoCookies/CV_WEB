import React from "react";
import './styles/gamePageStyle.css'
import { Link } from "react-router-dom";

const Games = () => {
    return (
        <div>
            <Link to="/" className="btn return-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="me-2">
                    <path d="M6 8L2 12L6 16" />
                    <path d="M2 12H22" />
                </svg>
                Return
            </Link>
            <div className="title">
                <h1>
                    <span style={{ color: '#ff9f43' }}>Hello!</span>
                    <span style={{ color: '#0abde3' }}> And Welcome</span>
                    <span style={{ color: '#ee5253' }}> This page</span>
                    <span style={{ color: '#00d2d3' }}> will be</span>
                    <span style={{ color: '#5f27cd' }}> updated soon</span>
                </h1>
            </div>
        </div>
    );
}

export default Games;