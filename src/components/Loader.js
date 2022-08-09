import React from 'react'
import { FormattedMessage } from 'react-intl'

const Loader = () => {

    return (
        <div class="text-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
export default Loader