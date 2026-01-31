type DropdownContentProps = {
  children: React.ReactNode;
  className?: string;
};

const DropdownContent: React.FC<DropdownContentProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`absolute bg-white z-10 shadow-lg ${className || ""}`}>
      {children}
    </div>
  );
};

export default DropdownContent;
