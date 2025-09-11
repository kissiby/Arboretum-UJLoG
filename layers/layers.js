var wms_layers = [];

var lyr_arboretum_decoupe_2_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'arboretum_decoupe_2<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/arboretum_decoupe_2_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-717049.205534, 772083.431762, -715863.696108, 772938.837086]
        })
    });
var format_base_vie_1 = new ol.format.GeoJSON();
var features_base_vie_1 = format_base_vie_1.readFeatures(json_base_vie_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_base_vie_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_base_vie_1.addFeatures(features_base_vie_1);
var lyr_base_vie_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_base_vie_1, 
                style: style_base_vie_1,
                popuplayertitle: 'base_vie',
                interactive: true,
                title: '<img src="styles/legend/base_vie_1.png" /> base_vie'
            });
var format_parcelle_thematique_2 = new ol.format.GeoJSON();
var features_parcelle_thematique_2 = format_parcelle_thematique_2.readFeatures(json_parcelle_thematique_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelle_thematique_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_thematique_2.addFeatures(features_parcelle_thematique_2);
var lyr_parcelle_thematique_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_thematique_2, 
                style: style_parcelle_thematique_2,
                popuplayertitle: 'parcelle_thematique',
                interactive: true,
                title: '<img src="styles/legend/parcelle_thematique_2.png" /> parcelle_thematique'
            });
var format_parcelle_parainee_3 = new ol.format.GeoJSON();
var features_parcelle_parainee_3 = format_parcelle_parainee_3.readFeatures(json_parcelle_parainee_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelle_parainee_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_parainee_3.addFeatures(features_parcelle_parainee_3);
var lyr_parcelle_parainee_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_parainee_3, 
                style: style_parcelle_parainee_3,
                popuplayertitle: 'parcelle_parainee',
                interactive: true,
                title: '<img src="styles/legend/parcelle_parainee_3.png" /> parcelle_parainee'
            });
var format_parcelle_hors_sl_4 = new ol.format.GeoJSON();
var features_parcelle_hors_sl_4 = format_parcelle_hors_sl_4.readFeatures(json_parcelle_hors_sl_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcelle_hors_sl_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcelle_hors_sl_4.addFeatures(features_parcelle_hors_sl_4);
var lyr_parcelle_hors_sl_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_parcelle_hors_sl_4, 
                style: style_parcelle_hors_sl_4,
                popuplayertitle: 'parcelle_hors_sl',
                interactive: true,
                title: '<img src="styles/legend/parcelle_hors_sl_4.png" /> parcelle_hors_sl'
            });
var format_cloture_naturelle_5 = new ol.format.GeoJSON();
var features_cloture_naturelle_5 = format_cloture_naturelle_5.readFeatures(json_cloture_naturelle_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cloture_naturelle_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cloture_naturelle_5.addFeatures(features_cloture_naturelle_5);
var lyr_cloture_naturelle_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_cloture_naturelle_5, 
                style: style_cloture_naturelle_5,
                popuplayertitle: 'cloture_naturelle',
                interactive: true,
                title: '<img src="styles/legend/cloture_naturelle_5.png" /> cloture_naturelle'
            });
var format_limite_arboretum_6 = new ol.format.GeoJSON();
var features_limite_arboretum_6 = format_limite_arboretum_6.readFeatures(json_limite_arboretum_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_arboretum_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_arboretum_6.addFeatures(features_limite_arboretum_6);
var lyr_limite_arboretum_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_arboretum_6, 
                style: style_limite_arboretum_6,
                popuplayertitle: 'limite_arboretum',
                interactive: true,
                title: '<img src="styles/legend/limite_arboretum_6.png" /> limite_arboretum'
            });

lyr_arboretum_decoupe_2_0.setVisible(true);lyr_base_vie_1.setVisible(true);lyr_parcelle_thematique_2.setVisible(true);lyr_parcelle_parainee_3.setVisible(true);lyr_parcelle_hors_sl_4.setVisible(true);lyr_cloture_naturelle_5.setVisible(true);lyr_limite_arboretum_6.setVisible(true);
var layersList = [lyr_arboretum_decoupe_2_0,lyr_base_vie_1,lyr_parcelle_thematique_2,lyr_parcelle_parainee_3,lyr_parcelle_hors_sl_4,lyr_cloture_naturelle_5,lyr_limite_arboretum_6];
lyr_base_vie_1.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'sup': 'sup', });
lyr_parcelle_thematique_2.set('fieldAliases', {'id': 'id', 'layer': 'layer', 'path': 'path', 'ID_1': 'ID_1', 'code_parc': 'code_parc', 'Area': 'Area', 'Nb': 'Nb', });
lyr_parcelle_parainee_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', 'superficie': 'superficie', });
lyr_parcelle_hors_sl_4.set('fieldAliases', {'id': 'id', 'NON': 'NON', 'ID_1': 'ID_1', 'sup': 'sup', });
lyr_cloture_naturelle_5.set('fieldAliases', {'id': 'id', 'SUP': 'SUP', });
lyr_limite_arboretum_6.set('fieldAliases', {'id': 'id', 'Superficie': 'Superficie', });
lyr_base_vie_1.set('fieldImages', {'id': 'TextEdit', 'nom': 'TextEdit', 'sup': 'TextEdit', });
lyr_parcelle_thematique_2.set('fieldImages', {'id': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'ID_1': 'TextEdit', 'code_parc': 'TextEdit', 'Area': 'TextEdit', 'Nb': 'TextEdit', });
lyr_parcelle_parainee_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', 'superficie': 'TextEdit', });
lyr_parcelle_hors_sl_4.set('fieldImages', {'id': 'TextEdit', 'NON': 'TextEdit', 'ID_1': 'TextEdit', 'sup': 'TextEdit', });
lyr_cloture_naturelle_5.set('fieldImages', {'id': 'TextEdit', 'SUP': '', });
lyr_limite_arboretum_6.set('fieldImages', {'id': 'TextEdit', 'Superficie': 'TextEdit', });
lyr_base_vie_1.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'sup': 'no label', });
lyr_parcelle_thematique_2.set('fieldLabels', {'id': 'no label', 'layer': 'no label', 'path': 'no label', 'ID_1': 'no label', 'code_parc': 'no label', 'Area': 'no label', 'Nb': 'no label', });
lyr_parcelle_parainee_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', 'superficie': 'no label', });
lyr_parcelle_hors_sl_4.set('fieldLabels', {'id': 'no label', 'NON': 'no label', 'ID_1': 'no label', 'sup': 'no label', });
lyr_cloture_naturelle_5.set('fieldLabels', {'id': 'no label', 'SUP': 'no label', });
lyr_limite_arboretum_6.set('fieldLabels', {'id': 'no label', 'Superficie': 'no label', });
lyr_limite_arboretum_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});