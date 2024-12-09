// src/components/ImageModalProvider.tsx
"use client";

import { useState, useEffect, ReactNode } from "react";

interface ImageModalProviderProps {
  children: ReactNode;
}

const ImageModalProvider: React.FC<ImageModalProviderProps> = ({
  children,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");

  useEffect(() => {
    function handleImageClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === "img") {
        const img = target as HTMLImageElement;
        setModalImageSrc(img.src);
        setModalOpen(true);
      }
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setModalOpen(false);
      }
    }

    document.addEventListener("click", handleImageClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleImageClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      {children}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <img
              src={modalImageSrc}
              alt="Expanded"
              className="max-w-full max-h-full"
            />
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModalProvider;
