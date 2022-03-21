const Button = ({ onClick, children }: { onClick: (response: any) => Promise<void>, children: React.ReactNode }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-r from-green-500 to-green-300 transition duration-300 border border-4 hover:bg-green-700 rounded-full text-white px-8 py-2 text-lg">
      {children}
    </button>
  )
}

export default Button