let currentPartnersTab = "customers"; // "customers" or "partners"

function updatePartnersLogos() {
    const customersLogos = document.getElementById("customers-logos");
    const partnersLogos = document.getElementById("partners-logos");
    const pastPartnersLogos = document.getElementById("past-partners-logos");
    if (!customersLogos || !partnersLogos || !pastPartnersLogos) return;


    customersLogos.style.display = currentPartnersTab !== "customers" ? "none" : "flex";
    partnersLogos.style.display = currentPartnersTab !== "partners" ? "none" : "flex";
    pastPartnersLogos.style.display = currentPartnersTab !== "past-partners" ? "none" : "flex";
}

function switchPartnersTab(tab) {
    if (currentPartnersTab === tab) return;
    currentPartnersTab = tab;
};

function listenTabClick() {
    const partnersTabs = document.querySelectorAll(".partners__tab");

    function tabClickEffects(tab) {
        partnersTabs.forEach((t) => {
            t.classList.remove("active");
            t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        updatePartnersLogos();
    }

    partnersTabs.forEach((tab) => {
        const handler = () => {
            switchPartnersTab(tab.dataset.tab);
            tabClickEffects(tab);
        };

        tab.addEventListener("click", handler);

        return () => tab.removeEventListener("click", handler);
    });
}

function initPartners() {
    listenTabClick();
    updatePartnersLogos();
}

initPartners();