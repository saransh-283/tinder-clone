import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

function SwipeButtons() {
    return (
        <div className="swipe-buttons">
            <IconButton>
                <ReplayIcon id="replay" className="icon"></ReplayIcon>
            </IconButton>
            <IconButton>
                <CloseIcon id="close" className="icon"></CloseIcon>
            </IconButton>
            <IconButton>
                <StarRateIcon id="star" className="icon"></StarRateIcon>
            </IconButton>
            <IconButton>
                <FavoriteIcon id="favorite" className="icon"></FavoriteIcon>
            </IconButton>
            <IconButton>
                <FlashOnIcon id="flash-on" className="icon"></FlashOnIcon>
            </IconButton>
        </div>
    )
}

export default SwipeButtons
