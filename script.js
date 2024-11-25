document.addEventListener('DOMContentLoaded', () => {
    const bands = [
        'The Plot in You',
        'The Devil Wears Prada',
        'Pierce the Veil',
        'Norma Jean',
        'The Bled',
        'Say Anything',
        'The Midway State',
        'We Came as Romans',
        'Counterparts',
        'Oh, Sleeper',
        'A Skylit Drive',
        'Anywhere But Here',
        'An Old Dog'
    ];

    function strip(article) {
        return article.replace(/^(a |an |the )/i, '').trim();
    }

    const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

    const bandList = document.getElementById('bands');
    if (!bandList) {
        console.error('Element with ID "bands" not found.');
        return;
    }

    sortedBands.forEach(band => {
        const li = document.createElement('li');
        li.textContent = band;
        bandList.appendChild(li);
    });
});
