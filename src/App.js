import ReactDOM from "react-dom";
import { useRef, useState } from "react";
import "./styles.css";
import useOnClickOutside from "./useOnClickOutside";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const onOpenModalClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={onOpenModalClick}>Click Me</button>
      <Modal isOpen={showModal} closeModal={closeModal}>
        Hello World
      </Modal>
    </div>
  );
}

const Modal = ({ isOpen, children, closeModal }) => {
  const mainbodyRef = useRef();
  useOnClickOutside(mainbodyRef, closeModal);

  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <div className="modal_main">
      <div
        // onClick={closeModal}
        className="modal_bg"
      />
      <div ref={(node) => (mainbodyRef.current = node)} className="modal">
        {children}
      </div>
    </div>,
    document.getElementById("modal_parent")
  );
};
