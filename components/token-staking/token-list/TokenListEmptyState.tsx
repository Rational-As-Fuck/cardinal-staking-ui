interface TokenListEmptyStateProps {
  fontColor?: string | undefined
  message: string
}

export const TokenListEmptyState = ({
  fontColor,
  message,
}: TokenListEmptyStateProps) => {
  return (
    <div className="container">
      <p
        className={`font-normal ${
          fontColor ? `text-[${fontColor}]` : 'text-gray-400'
        }`}
      >
        {message}
      </p>
      <style>{`
        .vault:has(.container) {
          height: 10vh
        }
      `}</style>
    </div>
  )
}
