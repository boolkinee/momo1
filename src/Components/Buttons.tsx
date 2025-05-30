

interface ButtonsProps {
  className?: string;
  label: string;
}
function Buttons({ className = "", label }: ButtonsProps) {
  return (
    <button type="button" className={`btn-default  ${className}`}>
      {label}
    </button>
  );
}

export default Buttons