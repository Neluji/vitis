import * as Formatting from 'utils/formatting.mjs'

export default Formatting.formatStyles({
  navbar: [
    'fixed',
    'h-screen',
    'w-20',
    'bg-lime-400',
    'flex',
    'flex-row',
    'flex-wrap',
    'content-between',
    'justify-around',
    'py-2',
  ],
  button: ['rounded-full', 'bg-orange-400', 'w-12', 'h-12', 'my-2', 'group'],
  hoverEffectRotation: [
    'block',
    'absolute',
    'w-[calc(100%+1rem)]',
    '-left-2',
    'h-1/3',
    'top-1/3',
    'rotate-[' + Math.ceil(Math.random() * 20) + 'deg]',
  ],
  hoverEffectScale: [
    'block h-full',
    'origin-left',
    'scale-x-0',
    'group-hover:scale-100',
    'transition-all',
    'duration-300',
    'bg-red-500',
  ],
})
