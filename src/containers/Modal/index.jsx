import { ModalBG, ModalWrapper } from './styled'
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

const Modal = ({ component, closeModal, isEditModalOpen }) => {

	const wrapperElement = document.createElement('div');
	wrapperElement.setAttribute("id", 'modal-root');
	document.body.appendChild(wrapperElement);

	const handleEditClose = () => {
		closeModal()
		wrapperElement.remove()
	}


	if (!isEditModalOpen) return null

	return createPortal(
		<>
			<ModalBG onClick={handleEditClose} />
			<ModalWrapper >
				{component}
			</ModalWrapper>
		</>, wrapperElement
	)
}

export default Modal