
let currentMapTab = 'achievements'; // "achievements" or "offices"

function switchMapTab(tab) {
    if (currentMapTab === tab) return;
    currentMapTab = tab;
};

function updateMap() {
    const achievements = document.getElementById("map-achievements");
    const offices = document.getElementById("map-offices");
    if (!achievements || !offices) return;

    achievements.style.display = currentMapTab !== "achievements" ? "none" : "flex";
    offices.style.display = currentMapTab !== "offices" ? "none" : "flex";
};

function listenTabClick() {
    const mapTabs = document.querySelectorAll(".map__tab");

    function tabClickEffects(tab) {
        mapTabs.forEach((t) => {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        updateMap();
    }

    mapTabs.forEach((tab) => {
        const handler = () => {
            switchMapTab(tab.dataset.tab);
            tabClickEffects(tab);
        };

        tab.addEventListener("click", handler);

        return () => tab.removeEventListener("click", handler);
    });
}

function initMap() {
    listenTabClick();
    updateMap();
}

initMap();
initMapTooltip();