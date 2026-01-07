interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-60 font-mono"
      onClick={onClose}
    >
      <div 
        className="max-h-[90vh] max-w-[90vw] fade-zoom-in"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </div>
  );
}