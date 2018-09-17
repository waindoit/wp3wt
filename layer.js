/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Defines settings for the Heron App layout wihtin Layout.js.
 *
 * The layout specifies a hierarchy of ExtJS (Panel) and GeoExt and Heron MC components.
 * For convenience specific settings within this layout are defined here
 * for structuring and reuse purposes.
 *
 **/
var url = window.location.toString();
        url.match(/\?(.+)$/);
        var params = RegExp.$1;

        var a = params;
            b = a.split('&');

        if (b[1]!= null){
            var res = b[1].replace(/%20/g, " ");
        }
        else {
            var res = b[0].replace(/%20/g, " ");
        }
       var e = res.replace("param=","");
       // "STATE_FIPS = '" . concat(e) . "'"
       var f = "KABUPATEN = '";
       var f1 =" OR PROPINSI = '"
       var g = e;
       var h = f.concat(g);
       var h1 = f1.concat(g);
       var i = "'";
       var j = h.concat(i);
       var j1 = h1.concat(i);
       var z = j.concat(j1);


OpenLayers.Util.onImageLoadErrorColor = "transparent";
OpenLayers.ProxyHost = "http://tematik.bpn.go.id:81/bpn2015/heron/cgi-bin/proxy.cgi?url=";
Ext.BLANK_IMAGE_URL = 'http://cdnjs.cloudflare.com/ajax/libs/extjs/3.4.1-1/resources/images/default/s.gif';

/*
 * Common settings for MapPanel
 * These will be assigned as "hropts" within the MapPanel config
 */
Ext.namespace("Heron.options.map");

Heron.options.map.settings = {
/*     projection: 'EPSG:4326',
    units: 'dd',
    // resolutions: [860.160, 430.080, 215.040, 107.520, 53.760, 26.880, 13.440, 6.720, 3.360, 1.680, 0.840, 0.420, 0.210, 0.105, 0.0525],
    maxExtent: '70.2,-39.500000000014936,175.50000000002106,35.2',
    // center: '4.92, 52.35',
    xy_precision: 3,
    max_features: 10,
    zoom: 1,
    theme: null, */

    projection: 'EPSG:900913',
     displayProjection: new OpenLayers.Projection("EPSG:4326"),
     units: 'm',
     maxExtent: '10554177.7, -1438145.5, 14888463.0, 1399196.9',
     center: '12721320.414, -19474.333',
     maxResolution: 'auto',
     xy_precision: 3,
     zoom: 5,
     numZoomLevels: 21,
     theme: null,

    /**
     * Useful to always have permalinks enabled. default is enabled with these settings.
     * MapPanel.getPermalink() returns current permalink
     *
     **/
    permalinks: {
        /** The prefix to be used for parameters, e.g. map_x, default is 'map' */
        paramPrefix: 'map',

        /** Encodes values of permalink parameters ? default false*/
        encodeType: false,
        /** Use Layer names i.s.o. OpenLayers-generated Layer Id's in Permalinks */
        prettyLayerNames: true
    }

    /** You can always control which controls are to be added to the map. */
    /* controls : [
     new OpenLayers.Control.Attribution(),
     new OpenLayers.Control.ZoomBox(),
     new OpenLayers.Control.Navigation({dragPanOptions: {enableKinetic: true}}),
     new OpenLayers.Control.LoadingPanel(),
     new OpenLayers.Control.PanPanel(),
     new OpenLayers.Control.ZoomPanel(),
     new OpenLayers.Control.OverviewMap(),
     new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})
     ] */
};

Heron.options.popStateRules = {
    rule_lt2M: 'Population < 2M',
    rule_2_4M: 'Population 2M-4M',
    rule_gt4M: '> 4M'
};

// TODO see how we can set/override Map OpenLayers Controls
//Heron.options.map.controls = [new OpenLayers.Control.ZoomBox(),
//          new OpenLayers.Control.ScaleLine({geodesic: true, maxWidth: 200})];
Ext.namespace("Heron.options.wfs");
Heron.options.wfs.downloadFormats = [
    {
        name: 'CSV',
        outputFormat: 'csv',
        fileExt: '.csv'
    },
    {
        name: 'GML (version 2.1.2)',
        outputFormat: 'text/xml; subtype=gml/2.1.2',
        fileExt: '.gml'
    },
//    {
//        name: 'ESRI Shapefile (zipped)',
//        outputFormat: 'SHAPE-ZIP',
//        fileExt: '.zip'
//    },
    {
        name: 'GeoJSON',
        outputFormat: 'json',
        fileExt: '.json'
    }
];


layerInfo = {

      "spatialReference" : {
        "wkid" : 900913
      },
      "singleFusedMapCache" : true,
      "tileInfo" : {
        "rows" : 256,
        "cols" : 256,
        "dpi" : 96,
        "format" : "JPEG",
        "compressionQuality" : 90,
        "origin" : {
          "x" : -20037508.342787,
          "y" : 20037508.342787
        },
        "lods" : [
          {"level" : 0, "resolution" : 156543.033928, "scale" : 591657527.591555},
          {"level" : 1, "resolution" : 78271.5169639999, "scale" : 295828763.795777},
          {"level" : 2, "resolution" : 39135.7584820001, "scale" : 147914381.897889},
          {"level" : 3, "resolution" : 19567.8792409999, "scale" : 73957190.948944},
          {"level" : 4, "resolution" : 9783.93962049996, "scale" : 36978595.474472},
          {"level" : 5, "resolution" : 4891.96981024998, "scale" : 18489297.737236},
          {"level" : 6, "resolution" : 2445.98490512499, "scale" : 9244648.868618},
          {"level" : 7, "resolution" : 1222.99245256249, "scale" : 4622324.434309},
          {"level" : 8, "resolution" : 611.49622628138, "scale" : 2311162.217155},
          {"level" : 9, "resolution" : 305.748113140558, "scale" : 1155581.108577},
          {"level" : 10, "resolution" : 152.874056570411, "scale" : 577790.554289},
          {"level" : 11, "resolution" : 76.4370282850732, "scale" : 288895.277144},
          {"level" : 12, "resolution" : 38.2185141425366, "scale" : 144447.638572},
          {"level" : 13, "resolution" : 19.1092570712683, "scale" : 72223.819286},
          {"level" : 14, "resolution" : 9.55462853563415, "scale" : 36111.909643},
          {"level" : 15, "resolution" : 4.77731426794937, "scale" : 18055.954822},
          {"level" : 16, "resolution" : 2.38865713397468, "scale" : 9027.977411},
          {"level" : 17, "resolution" : 1.19432856685505, "scale" : 4513.988705},
          {"level" : 18, "resolution" : 0.59716428349367, "scale" : 2256.994440},
          {"level" : 19, "resolution" : 0.29858214174684, "scale" : 1128.497220}
        ]
      },
      "initialExtent" : {
        "xmin" : 11883645,
        "ymin" : -693342,
        "xmax" : 11901837,
        "ymax" : -686271,
        "spatialReference" : {
          "wkid" : 102100
        }
      },
      "fullExtent" : {
        "xmin" : 11883645,
        "ymin" : -693342,
        "xmax" : 11901837,
        "ymax" : -686271,
        "spatialReference" : {
          "wkid" : 900913
        }
      },
      "capabilities" : "Map"
    };

//The max extent for spherical mercator
var maxExtent = new OpenLayers.Bounds(-20037508.34,-20037508.34,20037508.34,20037508.34);

//Max extent from layerInfo above
var layerMaxExtent = new OpenLayers.Bounds(
    layerInfo.fullExtent.xmin,
    layerInfo.fullExtent.ymin,
    layerInfo.fullExtent.xmax,
    layerInfo.fullExtent.ymax
);

var resolutions = [];
for (var i=0; i<layerInfo.tileInfo.lods.length; i++) {
    resolutions.push(layerInfo.tileInfo.lods[i].resolution);
}


/*
 * Layers to be added to the map.
 * Syntax is defined in OpenLayers Layer API.
 * ("isBaseLayer: true" means the layer will be added as base/background layer).
 */
Heron.options.map.layers = [

    /*
     * ==================================
     *            BaseLayers
     * ==================================
     */
//  May use new NASA WMTS : http://onearth.jpl.nasa.gov/wms.cgi?request=GetCapabilities

    new OpenLayers.Layer.OSM("Open Street Map"),


    new OpenLayers.Layer.WMS(
            "Peta Dasar Pertanahan",
            'http://geospasial.bpn.go.id/geoserver/wms',
            {layers: "geonode:pdp", format: 'image/png'},
            {singleTile: false, isBaseLayer: true, visibility: false, noLegend: true, transitionEffect: 'resize'}
    ),
    new OpenLayers.Layer.WMS(
            "Persil Berdasarkan Status Pendaftaran",
            'http://10.11.20.13/geoserver/wms',
            {layers: "petabpn:PersilBerdasarkanStatusPendaftaran", format: 'image/png'},
            {singleTile: false, isBaseLayer: false, visibility: false, noLegend: false, transitionEffect: 'resize'}
    ),

    // new OpenLayers.Layer.WMS(
    //         "World schematic",
    //         'http://www2.demis.nl/wms/wms.ashx?WMS=WorldMap',
    //         {layers: "Countries,Borders,Coastlines", format: 'image/png'},
    //         {singleTile: true, isBaseLayer: true, visibility: false, noLegend: true, transitionEffect: 'resize'}
    // ),
    // new OpenLayers.Layer.Bing(
    //         "Bing Imagery",
    //         {key: "AhH4ELJEca6p3kj1h_m0jH7xQIW63381nxDADAkbuRLrtUmutkei2-i9NMjISk_l",
    //          type: "AerialWithLabels",visibility: false},
    //         {singleTile: false, buffer: 0, isBaseLayer: true}

    // ),
    // new OpenLayers.Layer.Google(
    //         "Google Satellite",
    //         {type: google.maps.MapTypeId.SATELLITE, visibility: false},
    //         {singleTile: false, buffer: 0, isBaseLayer: true}

    // ),

    // new OpenLayers.Layer.Google(
    //                             "Google Streets", // the default
    //                             {type: google.maps.MapTypeId.ROADMAP, visibility: false},
    //                             {singleTile: false, buffer: 0, isBaseLayer: true}
    //                     ),
    // new OpenLayers.Layer.Google(
    //         "Google Terrain",
    //         {type: google.maps.MapTypeId.TERRAIN, visibility: false},
    //         {singleTile: false, buffer: 0, isBaseLayer: true}
    // ),


    new OpenLayers.Layer.ArcGISCache(
            "Vivid",
            "https://BPN1_MyDG:Welcome2DG1!@services.digitalglobe.com/earthservice/gis/362d8725-2b17-45ae-a8df-57089a415144/rest/services/DigitalGlobe:ImageryTileService/MapServer/",
            {isBaseLayer: true,
             visibility: false,
             transparent: true,
             format: 'image/png',
             //singleTile: true,
             opacity: 100,
             noLegend: false,
             transitionEffect: 'resize',
            //From layerInfo above
            resolutions: resolutions,
             tileSize: new OpenLayers.Size(layerInfo.tileInfo.cols, layerInfo.tileInfo.rows),
             tileOrigin: new OpenLayers.LonLat(layerInfo.tileInfo.origin.x , layerInfo.tileInfo.origin.y),
             maxExtent: layerMaxExtent,
             projection: 'EPSG:' + layerInfo.spatialReference.wkid
        }
    ),

    new OpenLayers.Layer.Image(
            "None",
            Ext.BLANK_IMAGE_URL,
            OpenLayers.Bounds.fromString(Heron.options.map.settings.maxExtent),
            new OpenLayers.Size(10, 10),
            {resolutions: Heron.options.map.settings.resolutions, isBaseLayer: true, visibility: false, displayInLayerSwitcher: true, transitionEffect: 'resize'}
    ),

    new OpenLayers.Layer.WMS(
            "Peta Tanah Kritis",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "TANAH_KRITIS_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
            // maxExtent: new OpenLayers.Bounds.toBBOX(),
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Ekosistem Pesisir",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "EKOSISTEM_PESISIR_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Indikasi Tanah Terlantar",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "INDIKASI_TANAH_TERLANTAR_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Infrastruktur Wilayah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "INFRASTRUKTUR_WILAYAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Kemampuan Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "KEMAMPUAN_TANAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Kemiringan Lereng",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "KEMIRINGAN_LERENG_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Masalah Pertanahan",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "MASALAH_PERTANAHAN_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Perairan Alam",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "PERAIRAN_ALAM_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Rawan Bencana Alam",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "RAWAN_BENCANA_ALAM_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Pemanfaatan Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "PEMANFAATAN_TANAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Kepemilikan Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "PEMILIKAN_TANAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Penguasaan Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "PENGUASAAN_TANAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Tanah Objek Landreform",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "TANAH_OBJEK_LANDREFORM_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Tanah Negara",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "TANAH_NEGARA_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Lokasi Sertipikasi Massal",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "LOKASI_SERTIPIKASI_MASSAL_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Tanah Aset Pemerintah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "TANAH_ASET_PEMERINTAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Penggunaan Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "PENGGUNAAN_TANAH_NONKAB", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),
    new OpenLayers.Layer.WMS(
            "Peta Sebaran Bidang Tanah",
            'http://tematik.bpn.go.id:8080/geoserver/wfs',
            {layers: "SEBARAN_BIDANG_TANAH_25K", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize', metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'tematik',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    )





    // ,
    // new OpenLayers.Layer.Vector("Penggunaan Tanah", {
    //     strategies: [new OpenLayers.Strategy.BBOX()],
    //     visibility: false,
    //     noLegend: true,
    //     protocol: new OpenLayers.Protocol.WFS({
    //         url: 'http://203.128.78.84:8080/geoserver/wfs',
    //         featureType: "PTNINDO2",
    //         featureNS: 'http://opengeo.org/bpn2015'
    //     }),
    //     filter: new OpenLayers.Filter.Comparison({
    //         type: OpenLayers.Filter.Comparison.EQUAL_TO,
    //         property: "PROVINSI",
    //         value: 'Jawa Tengah'
    //     })
    // })


    /* No feature info, strange GML response from KNMI...ESRI? */
    // new OpenLayers.Layer.WMS(
    //         "Meteosat Precipitation",
    //         'http://msgcpp-ogc-realtime.knmi.nl/msgrt.cgi?',
    //         {layers: "lwe_precipitation_rate", transparent: true, format: 'image/png'},
    //         {singleTile: true, opacity: 0.6, isBaseLayer: false, visibility: false, noLegend: false, transitionEffect: 'resize'}
    // )
    /* FOR DEBUGGING ESRI GFI !
     new OpenLayers.Layer.WMS(
     "Coastal Conditions",
     'http://arcserve.lawr.ucdavis.edu/arcgis/services/CSMW/Coastal_Conditions/MapServer/WMSServer?',
     {layers: "Coastal Conditions", transparent: true, format: 'image/png'},
     {singleTile: true, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.esri.wms_featureinfo_xml', transitionEffect: 'resize'}
     ) */
];

Ext.namespace("Heron.options.layertree");
Heron.options.layertree.tree = [
    {
        text: 'Data Dasar', expanded: true, children: [
        {nodeType: "gx_layer", layer: "Open Street Map" },
       /* {nodeType: "gx_layer", layer: "Persil Berdasarkan Status Pendaftaran" },  */
        {nodeType: "gx_layer", layer: "None" }
    ]
    },
    {
        text: 'Data Tematik', expanded: false, children: [
        {
            text: 'Administrasi dan Tempat Penting', expanded: false, children: [

            ]
        },
        {
            text: 'Penggunaan Tanah', expanded: false, children: [
           {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}
        ]
        },
        {
            text: 'Pemanfaatan Tanah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}

        ]
        },
        {
            text: 'Pemilikan Tanah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}


        ]
        },
        {
            text: 'Penguasaan Tanah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Penguasaan Tanah"},
            {nodeType: "gx_layer", layer: "Peta Tanah Negara"}

        ]

        },
        {
            text: 'Sebaran Bidang Tanah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Persil Berdasarkan Status Pendaftaran" },
              {nodeType: "gx_layer", layer: "Peta Sebaran Bidang Tanah" }

        ]
        },
        {
            text: 'Kemampuan Tanah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Kemampuan Tanah"},
            {nodeType: "gx_layer", layer: "Peta Kemiringan Lereng"}


        ]
        },
        {
            text: 'Ekosistem Pesisir', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Ekosistem Pesisir"}


        ]
        },
        {
            text: 'Indikasi Tanah Terlantar', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Indikasi Tanah Terlantar"}


        ]
        },
        {
            text: 'Peruntukan Tanah Terlantar', expanded: false, children: [

        ]
        },
        {
            text: 'Penguasaan Tanah Negara', expanded: false, children: [

        ]
        },
        {
            text: 'Tanah Kritis', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Tanah Kritis"}


        ]
        },
        {
            text: 'Masalah Pertanahan', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Masalah Pertanahan"}


        ]
        },
        {
            text: 'Lokasi sertifikasi Tanah Massal', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Lokasi Sertipikasi Massal"}

        ]
        },
        {
            text: 'Tanah Aset Pemerintahan dan Desa', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Tanah Aset Pemerintah"}
        ]
        },
        {
            text: 'Rawan Bencana Alam', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Rawan Bencana Alam"}


        ]
        },
        {
            text: 'Tematik Berbasis Data Statistik', expanded: false, children: [

        ]
        },
        {
            text: 'Infrastruktur Wilayah', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Infrastruktur Wilayah"}


        ]
        },
        {
            text: 'Tanah Objek Landreform', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Tanah Objek Landreform"}

        ]
        },
        {
            text: 'Kawasan Fungsional', expanded: false, children: [


        ]
        },
        {
            text: 'Wilayah Ketinggian', expanded: false, children: [


        ]
        },
        {
            text: 'Pola Aliran Sungai', expanded: false, children: [
            {nodeType: "gx_layer", layer: "Peta Perairan Alam"}

        ]
        },
        {
            text: 'RT/RW', expanded: false, children: [


        ]
        }
    ]
    },
    {
        text: 'Data Tanah Terlantar', expanded: false, children: [

    ]
    },
    {
        text: 'Data LP2B', expanded: false, children: [

    ]
    },
    {
        text: 'Data Pengadaan Tanah', expanded: false, children: [

    ]
    }

];


// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. "-" denotes a separator item.
Heron.options.map.toolbar = [
    {type: "scale", options: {width: 110}},
    {type: "-"} ,
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                showTopToolbar: true,

                // Should column-names be capitalized? Default true.
                columnCapitalize: true,

                // displayPanels option values are 'Table' and 'Detail', default is 'Table'
                // displayPanels: ['Table', 'Detail']
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // 'GeoPackage' needs heron.cgi with GDAL 1.1+ !!
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'Shapefile', 'GeoPackage', 'GeoJSON', 'WellKnownText'],
                maxFeatures: 10
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "coordinatesearch", options: {onSearchCompleteZoom: 8, fieldLabelX: 'lon', fieldLabelY: 'lat'}},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {type: "measurelength", options: {geodesic: true}},
    {type: "measurearea", options: {geodesic: true}},
    {type: "-"},
    {type: "addbookmark"},
    {type: "help", options: {tooltip: 'Help and info for this example', contentUrl: 'help.html'}}
];

// The content of the HTML info panel.
Ext.namespace("Heron.options.info");
Heron.options.info.html =
        '<div class="hr-html-panel-body" style="background:none;">' +
                '<center><b>Aplikasi Sistem Informasi Geospasial Tematik ATR/BPN</b></center></br>'+
                '<center><img src="img/logo_bpn.png" style="width:160px;margin-top:25px;" /></center></br>'+
                '<center><b>KEMENTERIAN AGRARIA DAN TATA RUANG/BPN</b></center></br>'+
                '</div>';

/*
 * Values for BookmarksPanel (bookmarks to jump to specific
 * layers/zoom/center on map.
 */
// Ext.namespace("Heron.options.bookmarks");
// Heron.options.bookmarks =
//         [
//             {
//                 id: 'id_world_europe',
//                 name: 'World schematic+cities',
//                 desc: 'Europe',
//                 layers: ['World schematic', 'World Cities (FAO)'],
//                 x: 9.272,
//                 y: 50.142,
//                 zoom: 4
//             },
//             {
//                 id: 'id_world_northamerica',
//                 name: 'World image - North America',
//                 desc: 'North America',
//                 layers: ['World image'],
//                 x: -96.328,
//                 y: 47.461,
//                 zoom: 2
//             }
//         ];