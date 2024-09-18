import React, { Dispatch, useEffect } from "react";
import { createPortal } from "react-dom";
import ClickAwayListener from "react-click-away-listener";

type CustomModalProps = {
  isVisible: boolean;
  setIsVisible?: Dispatch<React.SetStateAction<boolean>>;
  children: JSX.Element;
  styles?: string;
};

const CustomModal = ({
  isVisible,
  styles,
  children,
  setIsVisible,
}: CustomModalProps) => {
  useEffect(() => {
    const body = document.body;
    if (isVisible) {
      body.classList.add("overflow-hidden");
    }
    return () => {
      body.classList.remove("overflow-hidden");
    };
  }, [isVisible]);
  return (
    <>
      {isVisible &&
        createPortal(
          <div
            onClick={(event) => {
              event.stopPropagation();
            }}
            className="fixed left-0 right-0 top-0 z-50 h-[100%] max-h-full w-full space-x-4 overflow-y-auto overflow-x-hidden bg-[rgba(0,0,0,0.2)] md:inset-0"
          >
            <div className="mx-30 relative left-[50%] top-[50%] max-h-[80vh] w-[calc(100%-2vh)] max-w-[70rem] translate-x-[-50%] translate-y-[-50%] md:m-0">
              <div
                className={`relative mx-auto rounded-2xl bg-deep-green text-white shadow ${styles}`}
              >
                <ClickAwayListener
                  onClickAway={() => setIsVisible && setIsVisible(false)}
                >
                  {children}
                </ClickAwayListener>
              </div>
            </div>
          </div>,

          document.body,
        )}
    </>
  );
};

export default CustomModal;
