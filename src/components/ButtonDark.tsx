interface ButtonDarkProps {
    href: string;
    text: string;
    className?: string;
    children?: React.ReactNode;
  }
  
  function ButtonDark(props: ButtonDarkProps) {
    return (
      <a
        href={props.href}
        className={`border border-[#27272A] hover:bg-[#27272A] text-white font-medium py-2 px-4 rounded-md ${props.className} transition`}
      >
        {props.text}
        {props.children}
      </a>
    );
  }
  
  export default ButtonDark;