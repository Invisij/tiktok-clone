import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import { CloseIcon, LoadingIcon, SearchIcon } from '~/components/Icons';
import * as searchServices from '~/services/searchService';
import AccoutItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import { useDebounce } from '~/hooks';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showClose, setShowClose] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const debouncedValue = useDebounce(searchValue, 500);
    const inputRef = useRef();

    useEffect(() => {
        if (!debouncedValue.trim()) {
            setSearchResult([]);
            return;
        }
        const fetApi = async () => {
            setShowLoading(true);

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result);

            setShowLoading(false);
        };
        fetApi();
    }, [debouncedValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    };

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves
        // this by creating a new parentNode context.
        <div>
            <Tippy
                interactive
                visible={showClose && searchValue.length > 0}
                onClickOutside={() => {
                    setShowClose(false);
                }}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accouts</h4>
                            {searchResult.map((item) => (
                                <AccoutItem key={item.id} data={item} />
                            ))}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('search')}>
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search"
                        onClick={() => setShowClose(true)}
                        onChange={handleChange}
                    />
                    {!!searchValue && !showLoading && (
                        <button className={cx('clear-btn')} onClick={handleClear}>
                            <CloseIcon />
                        </button>
                    )}
                    {showLoading && <LoadingIcon className={cx('loading')} />}
                    <button className={cx('search-btn')}>
                        <SearchIcon />
                    </button>
                </div>
            </Tippy>
        </div>
    );
}

export default Search;
