type StackItem = {
  name: string;
  icon: React.ReactElement;
};

const StackBox = ({ stack }: { stack: StackItem }) => {
  return (
    <div className="border border-neutral-500 rounded-lg p-4 flex items-center gap-2 min-w-[140px] sm:min-w-40 shadow-sm hover:scale-105 hover:border-neutral-50 transition-transform">
      <div className="text-2xl text-neutral-100">{stack.icon}</div>
      <div className="text-neutral-100">{stack.name}</div>
    </div>
  );
}

export default StackBox;
