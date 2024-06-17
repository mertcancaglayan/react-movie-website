import React from "react";
import "./PopupOverlay.css";

const PopupOverlay = ({ show, onClose, children }) => {
	const handleOverlayClick = (e) => {
		if (e.target.classList.contains("closeBtn") || e.target.closest(".closeBtn")) {
			onClose();
		}
		if (e.target.classList.contains("popupOverlay")) {
			onClose();
		}
	};

	if (!show) return null;

	return (
		<div className="popupOverlay" onClick={handleOverlayClick}>
			{children}
		</div>
	);
};

export default PopupOverlay;
