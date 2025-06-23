import React from 'react';
import './mostFamous.scss';
import MostFamousTile from './MostFamousTile';

const MostFamous = () => {
    return (
        <>
            <section className="sub-container most-famous">
                <article className="most-famous-text">
                    <p className="text-m text-m-n">Featured Collection</p>
                    <div>
                        <h3 className="h4-m">The Afterglow Collection</h3>
                    </div>
                </article>
                <div className="most-famous-tiles">
                    <MostFamousTile />
                </div>
            </section>
        </>
    )
}

export default MostFamous
