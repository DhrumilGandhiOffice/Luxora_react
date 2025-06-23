import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function MenuLink({ isMobile = false , onLinkClick}) {
  const links = [
    { url: '/', label: 'Home' },
    { url: '/#about', label: 'About' },
    { url: '/#blog', label: 'Blog' },
    { url: '#contact', label: 'Contact Us' },
  ];

  return (
    <ul className="nav-links">
      {links.map((link, index) => {
        const isHashLink = link.url.includes('#');
        const Tag = link.url.includes('#') ? HashLink : Link;
        return (
          <li key={index}>
            <Tag
                to={link.url}
                className={isMobile ? 'mobile-link text-m h4-m' : 'text-m'}
                smooth // this only applies to HashLink; others ignore it
                onClick={isMobile && onLinkClick ? onLinkClick : undefined}
              >
                {link.label}
              </Tag>
          </li>
        )
      })}
    </ul>
  );
}

export default MenuLink;
