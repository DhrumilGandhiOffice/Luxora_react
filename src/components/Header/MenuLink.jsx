import React from 'react';

function MenuLink({ isMobile = false , onLinkClick}) {
  const links = [
    { url: 'index.html', label: 'Home' },
    { url: 'index.html#about', label: 'About' },
    { url: 'index.html#blog', label: 'Blog' },
    { url: '#contact', label: 'Contact Us' },
  ];

  return (
    <ul className="nav-links">
      {links.map((link, index) => (
        <li key={index}>
          <a
            className={isMobile ? 'mobile-link text-m h4-m' : 'text-m'}
            href={link.url}
            onClick={isMobile && onLinkClick ? onLinkClick : undefined}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default MenuLink;
