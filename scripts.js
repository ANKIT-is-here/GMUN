const committees = {
    DISEC: {
        title: "Disarmament and International Security Committee (DISEC)",
        description: "Focuses on global security and disarmament issues."
    },
    ECOFIN: {
        title: "Economic and Financial Committee (ECOFIN)",
        description: "Deals with economic growth and development issues."
    },
    SOCHUM: {
        title: "Social, Humanitarian, and Cultural Committee (SOCHUM)",
        description: "Addresses human rights and humanitarian issues."
    },
    SPECPOL: {
        title: "Special Political and Decolonization Committee (SPECPOL)",
        description: "Handles political and decolonization issues."
    },
    LEGAL: {
        title: "Legal Committee (LEGAL)",
        description: "Deals with legal issues and international law."
    }
};

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('change', () => {
    document.body.setAttribute('data-theme', themeToggle.checked ? 'dark' : 'light');
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalDescription = document.getElementById('modal-description');
const modalClose = document.getElementsByClassName('modal-close')[0];

modalClose.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

const committeeElements = document.querySelectorAll('.committee');
committeeElements.forEach(element => {
    element.addEventListener('click', () => {
        const committeeKey = element.getAttribute('data-committee');
        const committeeData = committees[committeeKey];
        modalTitle.textContent = committeeData.title;
        modalDescription.textContent = committeeData.description;
        modal.style.display = "block";
    });
});
