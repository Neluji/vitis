function formatStyles(styles) {
  const formattedStyles = {}

  for (let c in styles) {
    formattedStyles[c] = styles[c].join(' ')
  }

  return formattedStyles
}

export {formatStyles}