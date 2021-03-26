export const keyDownEvent = (activeContentEditable) => {
    document.addEventListener('keydown', function (event) {
        if (event.ctrlKey && event.key === 'k') {
            event.preventDefault();
            console.log('pressing');
            activeContentEditable();
        }
    });
}
