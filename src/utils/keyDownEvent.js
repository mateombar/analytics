export const keyDownEvent = (activeContentEditable) => {
    document.addEventListener('keydown', event => {
        if (event.ctrlKey && (event.key === 'k' || event.key === 'K')) {
            event.preventDefault();
            console.log('pressing');
            activeContentEditable();
        }
    });
}
