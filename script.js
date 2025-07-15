// script.js

document.addEventListener('DOMContentLoaded', () => {
    // 1. Récupération des éléments HTML nécessaires
    const scenarioListDiv = document.getElementById('scenarioList');
    const scenarioDetailDiv = document.getElementById('scenarioDetail');
    const backToListBtn = document.getElementById('backToList');
    const detailTitle = document.getElementById('detailTitle');
    const detailContent = document.getElementById('detailContent');
    const ndCalculatorDiv = document.getElementById('ndCalculator');

    const shutterSpeedNoFilterInput = document.getElementById('shutterSpeedNoFilter');
    const ndFactorSelect = document.getElementById('ndFactor');
    const calculateNdBtn = document.getElementById('calculateNd');
    const calculatedTimeSpan = document.getElementById('calculatedTime');

    // 2. Initialisation de l'affichage
    scenarioDetailDiv.style.display = 'none';

    ndFiltersData.forEach(filter => {
        const option = document.createElement('option');
        option.value = filter.stops;
        option.textContent = `${filter.factor} (${filter.stops} stops)`;
        ndFactorSelect.appendChild(option);
    });

    // 3. Fonction pour afficher la liste de tous les scénarios photographiques
    function displayScenarioList() {
        scenarioListDiv.innerHTML = '';
        scenarioListDiv.style.display = 'grid';
        scenarioDetailDiv.style.display = 'none';
        backToListBtn.style.display = 'none';

        photographyScenarios.forEach(scenario => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'scenario-item';
            itemDiv.innerHTML = `<span>${scenario.icon}</span><p>${scenario.name}</p>`;
            itemDiv.onclick = () => showScenarioDetail(scenario.id);
            scenarioListDiv.appendChild(itemDiv);
        });
    }

    // 4. Fonction pour afficher les détails d'un scénario spécifique ou le calculateur ND
    function showScenarioDetail(id) {
        scenarioListDiv.style.display = 'none';
        scenarioDetailDiv.style.display = 'block';
        backToListBtn.style.display = 'block';

        if (id === 'nd_calculator') {
            detailTitle.textContent = 'Calculateur Filtres ND';
            detailContent.innerHTML = '';
            ndCalculatorDiv.style.display = 'block';
        } else {
            const scenario = photographyScenarios.find(s => s.id === id);
            if (scenario) {
                detailTitle.textContent = scenario.name;
                ndCalculatorDiv.style.display = 'none';

                let htmlContent = ``;

                function addDetailSection(title, detailObject) {
                    if (detailObject && detailObject.value && detailObject.value !== "N/A") {
                        htmlContent += `
                            <div class="detail-section">
                                <h4>${title}:</h4>
                                <p>${detailObject.value} ${detailObject.explanation ? `<span>(${detailObject.explanation})</span>` : ''}</p>
                            </div>
                        `;
                    }
                }

                addDetailSection("Objectif Conseillé", scenario.recommendedLens);
                addDetailSection("Mode de Prise de Vue", scenario.shootingMode);
                addDetailSection("Ouverture", scenario.aperture);
                addDetailSection("Vitesse d'Obturation", scenario.shutterSpeed);
                addDetailSection("ISO", scenario.iso);
                addDetailSection("Mode AF", scenario.afMode);
                addDetailSection("Mode de Zone AF", scenario.afZoneMode);

                if (scenario.specificRecommendations && scenario.specificRecommendations.length > 0) {
                    htmlContent += `
                        <div class="detail-section">
                            <h4>Recommandations Spécifiques:</h4>
                            <ul>
                                ${scenario.specificRecommendations.map(rec => `<li>${rec}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                }
                detailContent.innerHTML = htmlContent;
            }
        }
    }

    // 5. Logique du Calculateur de Temps de Pose ND
    calculateNdBtn.addEventListener('click', () => {
        const shutterSpeed = parseFloat(shutterSpeedNoFilterInput.value);
        const stops = parseInt(ndFactorSelect.value);

        if (isNaN(shutterSpeed) || shutterSpeed <= 0) {
            calculatedTimeSpan.textContent = "Vitesse invalide. Entrez un nombre positif.";
            return;
        }

        const calculatedSeconds = shutterSpeed * Math.pow(2, stops);
        calculatedTimeSpan.textContent = formatTime(calculatedSeconds);
    });

    // 6. Fonction utilitaire pour formater le temps en secondes en h/m/s
    function formatTime(totalSeconds) {
        if (totalSeconds < 60) {
            return `${totalSeconds.toFixed(2)}s`;
        }
        const minutes = Math.floor(totalSeconds / 60);
        const remainingSeconds = (totalSeconds % 60).toFixed(0);

        if (minutes < 60) {
            return `${minutes}m ${remainingSeconds}s`;
        }
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        return `${hours}h ${remainingMinutes}m ${remainingSeconds}s`;
    }

    // 7. Gérer le bouton de retour pour afficher la liste des scénarios
    backToListBtn.onclick = displayScenarioList;

    // 8. Appel initial : Affiche la liste des scénarios au premier chargement de la page
    displayScenarioList();
});