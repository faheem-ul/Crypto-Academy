import { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

import Text from "./Text";
import Button from "./Button";
import { cn } from "@/libs/utils/twMerge";

import crossSvg from "@/public/images/dashboard/close.svg";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  drawerTitle?: string;
  mt?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  className,
  children,
  drawerTitle,
  mt,
}) => {
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleEscapeKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      onClose();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed right-0 top-0 z-50 h-full w-full bg-black opacity-50"
          onClick={handleOverlayClick}
        ></div>
      )}

      {/* Desktop Drawer */}
      <div
        className={twMerge(
          `fixed right-0 top-0 z-[999] hidden h-full w-[600px] transform overflow-scroll no-scrollbar rounded-l-[20px] bg-[#222223] transition-transform duration-500 ease-in-out md:block
           ${isOpen ? "translate-x-0" : "translate-x-full"}`,
          className
        )}
      >
        {/* Drawer Close Button */}
        <Button
          variant="gray"
          className="absolute flex justify-start mt-10 border-none py-0"
          onClick={onClose}
        >
          <Image src={crossSvg} alt="closeIcon" />
        </Button>
        {/* </div> */}

        {/* Drawer content */}
        <div
          className={cn(
            "flex max-w-[398px] h-full mob:h-auto mx-auto flex-col items-center justify-center pt-[30px]",
            mt
          )}
        >
          <div className="text-left mob:px-[25px] w-full pb-4">
            <Text className="text-[24px] font-semibold text-white">
              {drawerTitle}
            </Text>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Drawer;
