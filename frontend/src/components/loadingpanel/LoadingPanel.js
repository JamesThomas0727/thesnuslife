import Spinner from 'react-bootstrap/Spinner';
import "./LoadingPanel.css";
function LoadingPanel() {
    return (
        <div className='loading'>
            <Spinner animation="border"
                size='xl' variant='primary'
                role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>&nbsp;&nbsp;&nbsp;
        </div>
    );
}

export default LoadingPanel;