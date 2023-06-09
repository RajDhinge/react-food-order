import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from './Modal.module.css';

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
	const Backdrop = () => {
		return <div className={classes.backdrop} onClick={props.onClose} />
	}

	const ModalOverlay = () => {
		return (<div className={classes.modal}>
			<div className={classes.content}>{props.children}</div>
		</div>);
	}

	return (
		<Fragment>
			{ReactDOM.createPortal(
				<Backdrop />,
				portalElement
			)}
			{ReactDOM.createPortal(
				<ModalOverlay >{props.children}</ModalOverlay>,
				portalElement
			)}
		</Fragment>
	);
}

export default Modal;