interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export default function ImageModal({ src, alt, onClose }: ImageModalProps) {
  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-60 font-mono p-4"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-2xl md:max-w-3xl fade-zoom-in p-5 bg-primary rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain rounded-lg max-h-[75vh]"
        />
      </div>
    </div>
  );
}