import { createPortal } from "react-dom";
import cn from "../../Utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

interface TModal {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

interface TModalContext {
  onClose: () => void;
}
type TCloseButton = {
  children?: ReactNode;
};
type THeader = {
  children?: ReactNode;
};
const ModalContext = createContext<TModalContext | null>(null);

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleContainerOutside = (e: MouseEvent) => {
    if (!containerRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };
  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed inset-0 bg-gray-500/70 flex justify-center items-center invisible z-50",
          { visible: isOpen }
        )}
        onClick={handleContainerOutside}
      >
        <div
          ref={containerRef}
          className="bg-white w-full max-w-sm rounded-md relative p-2"
        >
          {/* <button onClick={onClose} className="absolute top-0 right-0">
            X
          </button> */}
          <div className="">{children}</div>
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const CloseButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;
  return (
    <button onClick={onClose} className=" p-0.5 ">
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6 bg-red-500 rounded-full text-white  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

const Header = ({ children }: THeader) => {
  return (
    <div className="flex w-full justify-between items-center ">{children}</div>
  );
};

Modal.Header = Header;
Modal.CloseButton = CloseButton;

export default Modal;
