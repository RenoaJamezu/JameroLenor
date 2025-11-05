type StackItem = {
  name: string;
  icon: React.ReactElement;
};

const StackBox = ({ stack }: { stack: StackItem }) => {
  return (
    <div className="bg-neutral-900/30 backdrop-blur-sm backdrop-saturate-150 border border-neutral-500/40 rounded-lg p-4 flex items-center gap-2 min-w-[140px] sm:min-w-40 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform">
      <div className="text-2xl text-neutral-100">{stack.icon}</div>
      <div className="text-neutral-100 text-sm">{stack.name}</div>
    </div>
  );
}

export default StackBox;
