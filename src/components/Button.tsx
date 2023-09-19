interface ButtonProps {
  children: string
  onClick: () => void
  color?: string
}

const Button = ({children,onClick,color="red"}:ButtonProps) => {
  return (
    <button className={`bg-${color}-500 text-white p-4 ml-4 rounded-xl`} onClick={onClick}>{children}</button>
  )
}

export default Button