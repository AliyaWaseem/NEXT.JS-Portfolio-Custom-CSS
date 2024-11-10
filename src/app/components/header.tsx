import Link from 'next/link';

interface HeaderProps {
    font: {
        className: string;
    };
}
const header = ({ font }: HeaderProps) => {
  return (
    <header>
       <div className={`${font.className} navdiv`}>
          <ul className='links'>
            <li className='link'><Link href="#about">About</Link></li>
            <li className='link'><Link href="#project">Projects</Link></li>
            <li className='link'><Link href="#contact">Contact</Link></li>
          </ul>
       </div>
    </header>
  )
}

export default header