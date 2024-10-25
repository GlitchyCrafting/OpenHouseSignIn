var setupData = {};

document.addEventListener("keyup", enterDevMode);

function enterDevMode(event) {
        if (event.type !== "keyup") return;
        if (!event.altKey && !event.ctrlKey && !event.shiftKey) return;
        if (!(event.key === "d" || event.key === "d")) return;

        document.getElementById("userMode").style.display = "none";
        document.getElementById("devMode").style.display = "block";

        document.getElementById("setupDataFile").onchange = f => {
                setupData["dataFile"] = f.target.files[0];
        }
}

function exitDevMode() {
        document.getElementById("devMode").style.display = "none";
        document.getElementById("userMode").style.display = "block";
        return setupData;
}