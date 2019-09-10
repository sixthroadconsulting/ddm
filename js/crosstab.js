
var vizList = ["https://public.tableau.com/views/PovertyDataPortal-NEW1/Dashboard12?:embed=y&:display_count=yes",
        "https://public.tableau.com/views/GraphicalAnalysisofDevelopmentIndicators/Graph-Dashboard",
        "https://public.tableau.com/views/SpatialData_15644661255310/Dashboard1",
        "https://public.tableau.com/views/PakistanPovertyIndicators/Poverty",
        "https://public.tableau.com/views/PopulationDistributionAcrossProvinces/Population-Dashboard",
        "https://public.tableau.com/views/Pakistan_Indicators/PSLM-Dashboard",
        "https://public.tableau.com/profile/yahya.bajwa#!/vizhome/MICS/Dashboard1?publish=yes",
        "https://public.tableau.com/views/DistrictFragilityOverview/Dashboard1",
        "https://public.tableau.com/views/CrimesAgainstWomenFAFEN2010-12/CrimesAgainstWomen?:embed=y&:display_count=yes&:toolbar=no&:origin=viz_share_link",
        "https://public.tableau.com/shared/QBCZRW53B?:toolbar=no&:display_count=yes&:origin=viz_share_link",
        "https://public.tableau.com/views/EconomicEndowment/Dashboard1?:embed=y&:display_count=yes&:origin=viz_share_link",
        "https://public.tableau.com/views/CensusofManufacturingIndustriesCMI-ValueofOutput/Dashboard1?:embed=y&:display_count=yes&publish=yes&:origin=viz_share_link",
        "https://public.tableau.com/views/CMI-TotalDailyEmployment/Dashboard1?:embed=y&:display_count=yes&:toolbar=no&:origin=viz_share_link"];
    
var viz;

function createViz(vizPlusMinus) {
    var vizDiv = document.getElementById("Cross-Tabulation"),
        options = {
            // width: vizDiv.offsetWidth,
            // height: vizDiv.offsetHeight,
            hideTabs: true,
            hideToolbar: true
        };
    
    if (viz) { // If a viz object exists, delete it.
        viz.dispose();
    }
    // var vizURL = vizList[vizCount];
    var vizURL = vizList[vizPlusMinus];
    console.log(vizURL);
    viz = new tableau.Viz(vizDiv, vizURL, options); 
}

