interface ButtonOutlineProps {
  href: string,
  text: string,
  className?: string,
  children?: React.ReactNode,
}
  
function ButtonOutline(props: ButtonOutlineProps) {
  return (
    <a
      href={props.href}
      className={`button-outline ${props.className} transition`}
      target="_blank"
    >
      {props.text}
      {props.children}
    </a>
  )
}
  
export default ButtonOutline