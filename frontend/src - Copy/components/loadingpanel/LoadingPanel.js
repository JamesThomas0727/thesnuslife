import Spinner from 'react-bootstrap/Spinner';
import "./LoadingPanel.css";
import { useState } from 'react';
function LoadingPanel(props) {
    const [title, setTitle] = useState("Loading...");
    return (
        <div className='loading'>
            <Spinner animation="border"
                size='xl' variant='primary'
                role="status">
            </Spinner>&nbsp;&nbsp;&nbsp;
            <strong><h4>{title}</h4></strong>
        </div>
    );
}

export default LoadingPanel;