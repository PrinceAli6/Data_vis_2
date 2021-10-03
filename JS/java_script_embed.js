var vg_1 = "JS/pro_symbol_map.json";
vegaEmbed("#prop_symbol_chart", vg_1,{"actions": false}).then(function(result) {
 // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);


var vg_2 = "JS/scat_plot_use.json";
vegaEmbed("#scat_plot_use", vg_2,{"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);

var vg_3 = "JS/stacked_line_chart_use.json";
vegaEmbed("#line_chart_use", vg_3,{"actions": false}).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
   }).catch(console.error);
