import { useState, useEffect, useRef } from 'react';
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';

import styles from './Search.module.scss';
import AccoutItem from '~/components/AccountItem';
import PopperWrapper from '~/components/Popper';
import { CloseIcon, LoadingIcon, SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [showClose, setShowClose] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) {
            setSearchResult([]);
            return;
        }

        setShowLoading(true);

        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setShowLoading(false);
            })
            .catch(() => {
                setShowLoading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    return (
        <Tippy
            interactive
            visible={showClose}
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
                    onChange={(event) => setSearchValue(event.target.value)}
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
    );
}

export default Search;
