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
OpenLayers.ProxyHost = "http://10.18.0.122/wp3wt/cgi-bin/proxy.cgi?url=";
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
     zoom: 7,
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
    //new OpenLayers.Layer.Bing(
    //        "Bing Imagery",
    //        {key: "ApTJzdkyN1DdFKkRAE6QIDtzihNaf6IWJsT-nQ_2eMoO4PN__0Tzhl2-WgJtXFSp",
    //         type: "AerialWithLabels",visibility: false},
    //        {singleTile: false, buffer: 0, isBaseLayer: true}
//
    //),
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


    new OpenLayers.Layer.Image(
            "None",
            Ext.BLANK_IMAGE_URL,
            OpenLayers.Bounds.fromString(Heron.options.map.settings.maxExtent),
            new OpenLayers.Size(10, 10),
            {resolutions: Heron.options.map.settings.resolutions, isBaseLayer: true, visibility: false, displayInLayerSwitcher: true, transitionEffect: 'resize'}
    ),

    new OpenLayers.Layer.WMS(
            "Tanah Timbul / Musnah",
            'http://10.18.0.122:8080/geoserver/wfs',
            {layers: "INDONESIA_PROP", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
            // maxExtent: new OpenLayers.Bounds.toBBOX(),
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'wp3wt',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),    
    new OpenLayers.Layer.WMS(
            "Pulau Kecil Terluar",
            'http://10.18.0.122:8080/geoserver/wfs',
            {layers: "PulauLuar", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
            // maxExtent: new OpenLayers.Bounds.toBBOX(),
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'wp3wt',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),    
	  new OpenLayers.Layer.WMS(
            "Perbatasan",
            'http://10.18.0.122:8080/geoserver/wfs',
            {layers: "Perbatasandarat", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
            // maxExtent: new OpenLayers.Bounds.toBBOX(),
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'wp3wt',
                    featureNS: 'http://opengeo.org/bpn',
                    downloadFormats: Heron.options.wfs.downloadFormats
                }
            }
            }
    ),    
	new OpenLayers.Layer.WMS(
            "Pulau Kecil",
            'http://10.18.0.122:8080/geoserver/wfs',
            {layers: "pulaukecil", transparent: true, format: 'image/png' },
            {singleTile: false, opacity: 0.9, isBaseLayer: false, visibility: false, noLegend: false, featureInfoFormat: 'application/vnd.ogc.gml', transitionEffect: 'resize',
            // maxExtent: new OpenLayers.Bounds.toBBOX(),
            metadata: {
                wfs: {
                    protocol: 'fromWMSLayer',
                    featurePrefix: 'wp3wt',
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
        // {nodeType: "gx_layer", layer: "Bing Imagery" },
        // {nodeType: "gx_layer", layer: "Bing Satellite" },
        // {nodeType: "gx_layer", layer: "Tata Ruang" },
        // {nodeType: "gx_layer", layer: "Kawasan Hutan" },
        // {nodeType: "gx_layer", layer: "Peta Dasar" },
        {nodeType: "gx_layer", layer: "None" }
    ]
    },
    {
      text: 'Indeks WP3WT', expanded: true, children: [

          {
            text: 'Pesisir', expanded: false, children: []
          },
          
		   {nodeType: "gx_layer", layer: "Tanah Timbul / Musnah"}
		   ,{nodeType: "gx_layer", layer: "Pulau Kecil"}
		   ,{nodeType: "gx_layer", layer: "Pulau Kecil Terluar"}
		   ,{nodeType: "gx_layer", layer: "Perbatasan"}
          ,
          
          {
            text: 'Situ/Danau/Embung/Waduk', expanded: false, children: []
          },
          {
            text: 'Situs Bersejarah', expanded: false, children: []
          },
          {
            text: 'Kawasan Ekonomi Khusus', expanded: false, children: []
          },
          {
            text: 'Kawasan Strategis Nasional', expanded: false, children: []
          },
      ]
    },

    {
      text: 'Inventarisasi P4T', expanded: false, children: [

        {
            text: 'Aceh', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Bali', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Banten', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Bengkulu', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
    ,
        {
            text: 'DI Yogyakarta', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'DKI Jakarta', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Gorontalo', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Jambi', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Jawa Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Jawa Tengah', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Jawa Timur', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kalimantan Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kalimantan Selatan', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kalimantan Tengah', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kalimantan Timur', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kalimantan Utara', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: ' Kepulauan Bangka Belitung', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Kepulauan Riau', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Lampung', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Maluku', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Maluku Utara', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Nusa Tenggara Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Nusa Tenggara Timur', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Papua', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Papua Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Riau', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sulawesi Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sulawesi Selatan', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sulawesi Tengah', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sulawesi Tenggara', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sulawesi Utara', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sumatera Barat', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sumatera Selatan', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        },
        {
            text: 'Sumatera Utara', expanded: false, children: [
            {
                text: 'Penguasaan', expanded: false, children: [

            ]
            },
            {
                text: 'Pemilikan', expanded: false, children: [
               {nodeType: "gx_layer", layer: "Peta Kepemilikan Tanah"}
            ]
            },
            {
                text: 'Penggunaan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Penggunaan Tanah"}

            ]
            },
            {
                text: 'Pemanfaatan', expanded: false, children: [
                {nodeType: "gx_layer", layer: "Peta Pemanfaatan Tanah"}


            ]
            }
        ]
        }

      ]
    },

    {
      text: 'Potensi Penataan Kawasan', expanded: false, children: []
    },

    {
      text: 'Evaluasi Pemanfaatan Kawasan', expanded: false, children: []
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
                '<center><b>Aplikasi Sistem Informasi WP3WT</b></center></br>'+
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
