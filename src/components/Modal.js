import './Modal.css';
import ReactDom from 'react-dom';

export default function Modal({ children, handleClose, isSaleModal }) {
  return ReactDom.createPortal((
    <div className="modal-backdrop">
        <div className="modal" style={{
          border: "4px solid",
          borderColor: isSaleModal ? "#ff4500": "#555",
          textAlign: "center"
        }}>
            {children}
            <button onClick={handleClose} className={isSaleModal?"sales-btn":""}>Close</button>
        </div>
    </div>
  ), document.body)
}


