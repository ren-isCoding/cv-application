const preventLetters = (e) => {
    if (e.which < 48 || e.which > 57) {
        e.preventDefault()
    }
}

export { preventLetters }
