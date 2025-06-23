import './latestJournal.scss'

const LatestJournal = () => {
    const journalData = {
        "sectionId": "blog",
        "sectionClass": "sub-container latest-journal",
        "heading": "Latest from our Journal",
        "tiles": [
            {
                "image": "./assets/images/journals/journal-1.jpg",
                "alt": "journal-1",
                "title": "Elevate Your Wardrobe: Mu..."
            },
            {
                "image": "./assets/images/journals/journal-2.jpg",
                "alt": "journal-1",
                "title": "The Art of Layering: Tips to..."
            },
            {
                "image": "./assets/images/journals/journal-3.jpg",
                "alt": "journal-1",
                "title": "Behind the Seams: The Stor..."
            }
        ]
    };

    return (
        <>
            <section id={journalData.sectionId} className={journalData.sectionClass}>
                <article className="journal-text">
                    <h3>{journalData.heading}</h3>
                </article>

                <div className="journal-tiles">
                    {journalData.tiles.map((tile, index) => (
                        <div className='journal-tile' key={index}>
                            <div className='tile-wrap'>
                                <div className='tile-image'>
                                    <img src={tile.image} alt={tile.alt} />
                                </div>
                                <div className='tile-text'>
                                    <h4 className='h6-m'>{tile.title}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}

export default LatestJournal
