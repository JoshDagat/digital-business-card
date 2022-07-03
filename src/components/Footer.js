import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function Footer() {
    return (
        <footer className='footer'>
            <ul className='footer__social-links'>
                <li>
                    <FontAwesomeIcon
                        size={'2xl'}
                        icon={brands('twitter-square')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        size={'2xl'}
                        icon={brands('facebook-square')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        size={'2xl'}
                        icon={brands('instagram-square')}
                    />
                </li>
                <li>
                    <FontAwesomeIcon
                        size={'2xl'}
                        icon={brands('github-square')}
                    />
                </li>
            </ul>
        </footer>
    )
}