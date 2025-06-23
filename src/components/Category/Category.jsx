import './category.scss';

const Category = () => {
    const columns = [
    {
      className: 'col r2c1',
      tiles: [
        {
          tileClass: 'r1c1',
          mobileSrc: './assets/images/productGrid/r1c1-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r1-c1.jpg',
          hoverSrc: './assets/images/productGrid/r1c1-h.jpg',
          alt: 'White Dress',
        },
        {
          tileClass: 'r3c1',
          mobileSrc: './assets/images/productGrid/r3c1-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r3-c1.jpg',
          hoverSrc: './assets/images/productGrid/r3c1-h.jpg',
          alt: 'White Dress',
        },
      ],
    },
    {
      className: 'col r3c1',
      tiles: [
        {
          tileClass: 'r1c2',
          mobileSrc: './assets/images/productGrid/r1c2-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r1-c2.jpg',
          hoverSrc: './assets/images/productGrid/r1c2-h.jpg',
          alt: 'Shiny Top',
        },
        {
          tileClass: 'r2c2',
          mobileSrc: './assets/images/productGrid/r2c2-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r2-c2.jpg',
          hoverSrc: './assets/images/productGrid/r2c2-h.jpg',
          alt: 'Shiny Top',
        },
        {
          tileClass: 'r3c2',
          mobileSrc: './assets/images/productGrid/r3c2-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r3-c2.jpg',
          hoverSrc: './assets/images/productGrid/r3c2-h.jpg',
          alt: 'Shiny Top',
        },
      ],
    },
    {
      className: 'col r2c1',
      tiles: [
        {
          tileClass: 'r1c3',
          mobileSrc: './assets/images/productGrid/r1c3-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r1-c3.jpg',
          hoverSrc: './assets/images/productGrid/r1c3-h.jpg',
          alt: 'Shiny Top',
        },
        {
          tileClass: 'r3c3',
          mobileSrc: './assets/images/productGrid/r3c3-m.jpg',
          desktopSrc: './assets/images/productGrid/grid-r3-c3.jpg',
          hoverSrc: './assets/images/productGrid/r3c3-h.jpg',
          alt: 'Denim Back',
        },
      ],
    },
  ];

    return (
        <>
            <section className="sub-container product-grid">
                <div className="grid-container">
                    {
                        columns.map((column, indexCol) => (
                            <div className={column.className} key={indexCol}>
                                {column.tiles.map((tile, indexTile) => (
                                    <div className={`grid-tile ${tile.tileClass}`} key={indexTile}>
                                        <picture>
                                            <source srcSet={tile.mobileSrc} media="(max-width: 768px)" />
                                            <source srcSet={tile.desktopSrc} media="(max-width: 1512px)" />
                                            <img className="grid-img normal" src={tile.desktopSrc} alt="Example Image" />
                                        </picture>
                                        <img className="grid-img hover" src={tile.hoverSrc} alt={tile.alt} />
                                    </div>
                                ))}
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Category
