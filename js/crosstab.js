
var vizList = ["https://public.tableau.com/views/PovertyDataPortal-NEW1/Dashboard12?:embed=y&:display_count=yes",
        "https://public.tableau.com/views/Graph_15645824272260/Graph",
        "https://public.tableau.com/views/SpatialData_15644661255310/Dashboard1"];
    
var viz,
    vizLen = vizList.length,
    vizCount = 0;

function createViz(vizPlusMinus) {
    var vizDiv = document.getElementById("Cross-Tabulation"),
        options = {
            hideTabs: true
        };
    vizCount = vizCount + vizPlusMinus;
    
    if (vizCount >= vizLen) { 
    // Keep the vizCount in the bounds of the array index.
        vizCount = 0;
    } else if (vizCount < 0) {
        vizCount = vizLen - 1;
    }
    
    if (viz) { // If a viz object exists, delete it.
        viz.dispose();
    }
    var vizURL = vizList[vizCount];
    viz = new tableau.Viz(vizDiv, vizURL, options); 
}