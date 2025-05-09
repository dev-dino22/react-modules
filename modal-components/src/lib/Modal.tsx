import { useEffect } from "react";
import ModalBox from "./ModalBox";
import {
  ModalContainer,
  ModalBackdrop,
  Container,
  Wrapper,
} from "./styles/ModalStyle";
import { ModalProps } from "./types/modalTypes";

const Modal = ({
  modalType,
  titleText = "",
  children,
  closeType,
  onClose,
}: ModalProps) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <ModalContainer modalType={modalType}>
      <ModalBackdrop onClick={onClose} />
      <Container>
        <Wrapper>
          <ModalBox
            modalType={modalType}
            titleText={titleText}
            closeType={closeType}
            onClose={onClose}
          >
            {children}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
