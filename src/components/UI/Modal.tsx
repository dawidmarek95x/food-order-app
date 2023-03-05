import { ReactNode } from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.scss';

interface BackdropProps {
  onClose: () => void;
}

interface ModalOverlayProps {
  children: ReactNode;
}

type ModalProps = BackdropProps & ModalOverlayProps;

const Backdrop = ({ onClose }: BackdropProps) => {
  return <div className={classes.backdrop} onClick={onClose}></div>;
};

const ModalOverlay = ({ children }: ModalOverlayProps) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays')!;
const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={onClose} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
