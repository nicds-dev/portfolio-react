interface ButtonWhiteProps {
  href: string;
  text: string;
  className?: string;
  children?: React.ReactNode;
}

function ButtonWhite(props: ButtonWhiteProps) {
  return (
    <a
      href={props.href}
      className={`bg-white hover:bg-gray-300 text-black font-normal py-2 px-4 rounded-md ${props.className} transition`}
    >
      {props.text}
      {props.children}
    </a>
  );
}

export default ButtonWhite;