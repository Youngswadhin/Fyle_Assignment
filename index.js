const handlePopup = () => {
    const popup = document.querySelector('.popup')

    document.body.style.overflowY = "hidden"

    popup.style.display = "flex"
}

const handlePopupClose = () => {
    const popup = document.querySelector('.popup')

    document.body.style.height = "auto"
    document.body.style.overflowY = "scroll"

    popup.style.display = "none"
}