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
      className={`bg-zinc-950 hover:bg-zinc-600 text-white dark:bg-white dark:hover:bg-zinc-400 dark:text-zinc-950 font-normal py-2 px-4 rounded-md ${
        props.className} transition`}
      target={props.target}
    >
      {props.text}
      {props.children}
    </a>
  )
}

export default ButtonFilled