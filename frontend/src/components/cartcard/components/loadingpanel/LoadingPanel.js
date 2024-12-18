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
            <h4><strong>{title}</strong></h4>
        </div>
    );
}

export default LoadingPanel;