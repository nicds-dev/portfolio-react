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
      className={`border border-zinc-300 text-inherit hover:bg-zinc-300 dark:border-zinc-800 dark:text-white dark:hover:bg-zinc-800 font-medium py-2 px-4 rounded-md ${
        props.className} transition`}
      target="_blank"
    >
      {props.text}
      {props.children}
    </a>
  )
}
  
export default ButtonOutline