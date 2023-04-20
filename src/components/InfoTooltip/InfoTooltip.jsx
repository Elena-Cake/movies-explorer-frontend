import './InfoTooltip.css'
function InfoTooltip({ isOpen, onClose, text }) {
    const className = `popup-wrapper popup-status ${isOpen ? 'popup-wrapper_open' : ''}`
    return (
        <div className={className}>
            <div className="popup__container">
                <button onClick={onClose} className="popup__button-close button" type="button" aria-label="закрыть окно"></button>
                <div className="popup__form">
                    <p className="popup__status-text" >
                        {text}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InfoTooltip;