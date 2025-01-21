interface ButtonFilledProps {
  href: string,
  text: string,
  className?: string,
  children?: React.ReactNode,
  target?: string,
}

function ButtonFilled(props: ButtonFilledProps) {
  return (
    <a
      href={props.href}
      className={`button-filled ${props.className} transition`}
      target={props.target}
    >
      {props.text}
      {props.children}
    </a>
  )
}

export default ButtonFilled