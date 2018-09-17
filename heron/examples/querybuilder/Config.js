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

/** api: example[querybuilder]
 *  Edit and execute WFS Queries
 *  ----------------------------
 *  Use the GXP QueryPanel to build and execute WFS spatial and filter-queries.
 */

/** This config assumes the DefaultOptionsWorld.js to be included first!! */
Heron.options.map.settings.zoom = 5;
Heron.options.map.settings.center = '12721320.414, -19474.333';

Ext.namespace("Heron.examples");

// See ToolbarBuilder.js : each string item points to a definition
// in Heron.ToolbarBuilder.defs. Extra options and even an item create function
// can be passed here as well. By providing a "create" function your own toolbar
// item can be added.
// For menu's and other standard ExtJS Toolbar items, the "any" type can be
// used. There you need only pass the options, similar as in the function
// ExtJS Toolbar.add().
Heron.options.map.toolbar = [
    {type: "scale", options: {width: 110}},
     {type: "-"} ,
    {type: "featureinfo", options: {
        popupWindow: {
            width: 360,
            height: 200,
            featureInfoPanel: {
                displayPanels: ['Table'],
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'Shapefile'],
                // Export to download file. Option values are 'CSV', 'XLS', default is no export (results in no export menu).
                // exportFormats: ['CSV', 'XLS'],
                maxFeatures: 10
            }
        }
    }},
    {type: "-"} ,
    {type: "pan"},
    {type: "zoomin"},
    {type: "zoomout"},
    {type: "zoomvisible"},
    {type: "coordinatesearch", options: {

        // === Full demo configuration ===

                // see ToolbarBuilder.js
                      formWidth: 320
                    , formPageX: 15
                    , formPageY: 100
                // see CoordSearchPanel.js
                    // , title: 'My title'
                    , titleDescription: 'Please choose your input projection system...<br><br>Then enter the Lon/Lat-values (European area only) or the<br>X/Y-coordinates as requested.<br>&nbsp;<br>'
                    , titleDescriptionStyle: 'font-size:11px; color:dimgrey;'
                    , bodyBaseCls: 'x-form-back'
                    , bodyItemCls: 'hr-html-panel-font-size-11'
                    , bodyCls: 'hr-html-panel-font-size-11'
                    , fieldMaxWidth: 200
                    , fieldLabelWidth: 80
                    , fieldStyle: 'color: red;'
                    , fieldLabelStyle: 'color: darkblue'
                    , layerName: 'Location Europe - Lon/Lat'
                    , onProjectionIndex: 1
                    , onZoomLevel: -1
                    , showProjection: true
                    , showZoom: true
                    , showAddMarkers: true
                    , checkAddMarkers: true
                    , showHideMarkers: true
                    , checkHideMarkers: false
                    , showResultMarker: true
                    , fieldResultMarkerStyle: 'color: green;'
                    , fieldResultMarkerText: 'Marker position: '
                    , fieldResultMarkerSeparator: ' | '
                    , fieldResultMarkerPrecision: 4
                    , removeMarkersOnClose: true
                    , showRemoveMarkersBtn: true
                    , buttonAlign: 'center'     // left, center, right
                        /*
                            http://spatialreference.org/ref/epsg/4326/
                            EPSG:4326
                            WGS 84
                            WGS84 Bounds: -180.0000, -90.0000, 180.0000, 90.0000
                            Projected Bounds: -180.0000, -90.0000, 180.0000, 90.0000

                            http://spatialreference.org/ref/epsg/28992/    
                            EPSG:28992
                            Amersfoort / RD New
                            WGS84 Bounds: 3.3700, 50.7500, 7.2100, 53.4700
                            Projected Bounds: 12628.0541, 308179.0423, 283594.4779, 611063.1429
                        */
                    , hropts: [
                        {
                              projEpsg: 'EPSG:4326'
                            , projDesc: 'EPSG:4326 - WGS 84'
                            , fieldLabelX: 'Lon [Grad]'
                            , fieldLabelY: 'Lat [Grad]'
                            , fieldEmptyTextX: 'Please enter Lon value...'
                            , fieldEmptyTextY: 'Please enter Lat value...'
                            , fieldMinX: -180
                            , fieldMinY: -90
                            , fieldMaxX: 180
                            , fieldMaxY: 90
                            , fieldDecPrecision: 6
                            , iconWidth: 32
                            , iconHeight: 32
                            , localIconFile: 'bluepin.png'
                            , iconUrl: null
                        }
                        ,
                        {
                              projEpsg: 'EPSG:28992'
                            , projDesc: 'EPSG:28992 - Amersfoort / RD New'
                            , fieldLabelX: 'X [m]'
                            , fieldLabelY: 'Y [m]'
                            , fieldEmptyTextX: 'Please enter X-coordinate...'
                            , fieldEmptyTextY: 'Please enter Y-coordinate...'
                            , fieldMinX: 12628.0541
                            , fieldMinY: 308179.0423
                            , fieldMaxX: 283594.4779
                            , fieldMaxY: 611063.1429
                            , fieldDecPrecision: 2
                            , iconWidth: 32
                            , iconHeight: 32
                            , localIconFile: 'redpin.png'
                            , iconUrl: null
                        }
                    ]

        // ====================================

    }},
    {type: "-"} ,
    {type: "zoomprevious"},
    {type: "zoomnext"},
    {type: "-"},
    {
        type: "searchcenter",
        // Options for SearchPanel window
        options: {
            show: false,

            searchWindow: {
                title: __('Query Builder'),
                x: 100,
                y: undefined,
                layout: 'fit',
                width: 380,
                height: 420,
                items: [
                    {
                        xtype: 'hr_searchcenterpanel',
                        id: 'hr-searchcenterpanel',
                        hropts: {
                            searchPanel: {
                                xtype: 'hr_gxpquerypanel',
                                header: false,
                                border: false,
                                spatialQuery: true,
                                attributeQuery: true,
                                caseInsensitiveMatch: true,
                                autoWildCardAttach: true
                            },
                            resultPanel: {
                                xtype: 'hr_featuregridpanel',
                                id: 'hr-featuregridpanel',
                                header: false,
                                border: false,
                                autoConfig: true,
                                exportFormats: ['CSV', 'XLS', 'GMLv2', 'GeoJSON', 'WellKnownText', 'GeoPackage', 'Shapefile'],
                                hropts: {
                                    zoomOnRowDoubleClick: true,
                                    zoomOnFeatureSelect: false,
                                    zoomLevelPointSelect: 8,
                                    zoomToDataExtent: true
                                }
                            }
                        }
                    }
                ]
            }
        }
    }
];

