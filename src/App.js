import React from 'react';

import algoliasearch from 'algoliasearch/lite';
import {
    InstantSearch,
    Hits,
    SearchBox,
    Pagination,
} from 'react-instantsearch-dom';

import './App.css';

const searchClient = algoliasearch(
    '4QKH787BQR',
    '3116c02cb6c441818254ced605c5cdd7'
);

// ===== OPTION 1: if you want to create your own algolia account and fill it with data =====
// demo data: https://www.algolia.com/doc/guides/building-search-ui/resources/demos/react/#media
// sample datasets on github: https://github.com/algolia/datasets

// ===== OPTION 2: if you want to get started quickly =====
// app id: SSN9CKZUJ2
// api key: ae8a3f7cff93d40282a4831930bfa38b
// index name: products

const Product = ({ hit }) => {
    return (
        <a
            className="product"
            href={hit.url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={hit.image} alt={hit.name} />
            <div>
                <h3>{hit.brand}</h3>
                <h2>{hit.name}</h2>
                <p>${hit.price}</p>
            </div>
        </a>
    );
};

export default function App() {
    return (
        <InstantSearch searchClient={searchClient} indexName="products">
            <div className="app">
                <div className="search-container">
                    <SearchBox />
                    <Hits hitComponent={Product} />
                    <Pagination />
                </div>
            </div>
        </InstantSearch>
    );
}
