import { FC } from 'react';

interface FooterProps
{
  children?: string | JSX.Element | JSX.Element[]
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer>
        { children }
    </footer>
  )
}

export default Footer
