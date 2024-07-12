window.addEventListener('DOMContentLoaded', () => {
    // Fonction pour remplacer le texte des éléments selectionnés par leurs textes fournis
    const replaceText = (selector, text) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.innerText = text;
        });
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency]);
    }
});