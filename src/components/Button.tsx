const Button = ({ onClick, children }: { onClick: () => any, children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 border border-0 hover:bg-green-700 rounded-full text-white px-8 py-2 text-lg">
      {children}
    </button>
  )
}

export default Button