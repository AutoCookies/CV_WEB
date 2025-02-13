import React from "react";
import './styles/journeyStyles.css'
import { Link } from "react-router-dom";

const Journey = () => {
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
                    <span style={{ color: '#ee5253' }}> This is</span>
                    <span style={{ color: '#00d2d3' }}> My</span>
                    <span style={{ color: '#5f27cd' }}> Coding Journey</span>
                </h1>
            </div>
            <div className="card1">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>1</span>
                <h3>Data Analysis Skils</h3>
                <p>The first skills I learn is Data Analysis, just study for fun but time through time It bring me a strange feeling. Maybe I am good at this.</p>
            </div>
            <div className="card2">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>2</span>
                <h3>Enhance Data Analysis Skils</h3>
                <p>Well! I began to study some courses on COURSERA and get Its certificates</p>
            </div>
            <div className="card3">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>3</span>
                <h3>Not Enough!</h3>
                <p>After gotten some certificates, I start my projects in Data Analist field</p>
            </div>
            <div className="card4">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>4</span>
                <h3>Still Not Enough!</h3>
                <p>I heard some others said, If you want to work with Data you must learn Machine Learning</p>
            </div>
            <div className="card5">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>5</span>
                <h3>Begin to learn Machine Learning</h3>
                <p>So I started my journey with Machine Learning on Youtube and COURSERA</p>
            </div>
            <div className="card6">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>5</span>
                <h3>Do some Project about Machine Learning</h3>
                <p>As before I practice my skill by doing some real world projects</p>
            </div>
            <div className="card7">
                <span style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ff9f43' }}>5</span>
                <h3>Begin Study Web Development</h3>
                <p>I see there are so many people study this, so I just follow.</p>
            </div>
        </div>
    );
}

export default Journey;