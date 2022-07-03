import React from "react";
import Button from './Button.js';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function Info() {
    return (
        <div className="info">
            <div className="info__image"></div>
            <h1 className="info__name">Josuer Bague</h1>
            <h2 className="info__occupation">Frontend Developer</h2>
            <span className="info__email">josuer.online.work@gmail.com</span>
            <div className="btn-group">
                <Button
                    icon={solid('envelope')}
                    size={'lg'}
                    text={'Email'}
                    styler={'btn btn__email'}
                />
                <Button
                    icon={brands('linkedin')}
                    size={'lg'}
                    text={'LinkedIn'}
                    styler={'btn btn__linked-in'}
                />
            </div>
        </div>
    )
}