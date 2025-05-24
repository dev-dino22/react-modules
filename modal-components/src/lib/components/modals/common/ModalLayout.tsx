import ModalBox from "./ModalBox";
import {
  ModalContainer,
  ModalBackdrop,
  Container,
  Wrapper,
} from "./ModalStyle";
import { ModalProps } from "../../../types/modalTypes";
import { useEscapeKeyClose } from "../../../hook/useEscapeKeyClose";
import { createPortal } from "react-dom";

const ModalLayout = ({
  modalPosition = "center",
  modalSize = "medium",
  titleText = "",
  descriptionText = "",
  children,
  closeType,
  onClose,
  footer,
  isCloseFocus = false,
}: ModalProps) => {
  useEscapeKeyClose(onClose);

  return createPortal(
    <ModalContainer modalPosition={modalPosition}>
      <ModalBackdrop onClick={onClose} />
      <Container modalSize={modalSize}>
        <Wrapper>
          <ModalBox
            modalPosition={modalPosition}
            titleText={titleText}
            closeType={closeType}
            onClose={onClose}
            isCloseFocus={isCloseFocus}
          >
            {descriptionText && (
              <p
                style={{
                  margin: "0",
                  whiteSpace: "pre-line",
                  overflow: "auto",
                  height: "fit-content",
                  maxHeight: "200px",
                  fontSize: "14px",
                  color: "#424242",
                }}
              >
                {descriptionText}
              </p>
            )}
            {children}
            {footer}
          </ModalBox>
        </Wrapper>
      </Container>
    </ModalContainer>,
    document.body
  );
};

export default ModalLayout;
