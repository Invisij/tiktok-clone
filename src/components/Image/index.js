import { forwardRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from './Image.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(styles);

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');

    const handleError = () => {
        setFallBack(customFallback);
    };

    return (
        <img
            ref={ref}
            className={cx('wrapper', { [className]: className })}
            src={fallBack || src}
            alt={alt}
            onError={handleError}
            {...props}
        />
    );
});

export default Image;
