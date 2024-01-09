sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("br.com.aegea.impressao.controller.Impressao", {

            types: {
                'abs': 'audio/x-mpeg',
                'ai': 'application/postscript',
                'aif': 'audio/x-aiff',
                'aifc': 'audio/x-aiff',
                'aiff': 'audio/x-aiff',
                'aim': 'application/x-aim',
                'art': 'image/x-jg',
                'asf': 'video/x-ms-asf',
                'asx': 'video/x-ms-asf',
                'au': 'audio/basic',
                'avi': 'video/x-msvideo',
                'avx': 'video/x-rad-screenplay',
                'bcpio': 'application/x-bcpio',
                'bin': 'application/octet-stream',
                'bmp': 'image/bmp',
                'body': 'text/html',
                'cdf': 'application/x-cdf',
                'cer': 'application/pkix-cert',
                'class': 'application/java',
                'cpio': 'application/x-cpio',
                'csh': 'application/x-csh',
                'css': 'text/css',
                'dib': 'image/bmp',
                'doc': 'application/msword',
                'dtd': 'application/xml-dtd',
                'dv': 'video/x-dv',
                'dvi': 'application/x-dvi',
                'eot': 'application/vnd.ms-fontobject',
                'eps': 'application/postscript',
                'etx': 'text/x-setext',
                'exe': 'application/octet-stream',
                'gif': 'image/gif',
                'gtar': 'application/x-gtar',
                'gz': 'application/x-gzip',
                'hdf': 'application/x-hdf',
                'hqx': 'application/mac-binhex40',
                'htc': 'text/x-component',
                'htm': 'text/html',
                'html': 'text/html',
                'ief': 'image/ief',
                'jad': 'text/vnd.sun.j2me.app-descriptor',
                'jar': 'application/java-archive',
                'java': 'text/x-java-source',
                'jnlp': 'application/x-java-jnlp-file',
                'jpe': 'image/jpeg',
                'jpeg': 'image/jpeg',
                'jpg': 'image/jpeg',
                'js': 'application/javascript',
                'jsf': 'text/plain',
                'json': 'application/json',
                'jspf': 'text/plain',
                'kar': 'audio/midi',
                'latex': 'application/x-latex',
                'm3u': 'audio/x-mpegurl',
                'mac': 'image/x-macpaint',
                'man': 'text/troff',
                'mathml': 'application/mathml+xml',
                'me': 'text/troff',
                'mid': 'audio/midi',
                'midi': 'audio/midi',
                'mif': 'application/x-mif',
                'mov': 'video/quicktime',
                'movie': 'video/x-sgi-movie',
                'mp1': 'audio/mpeg',
                'mp2': 'audio/mpeg',
                'mp3': 'audio/mpeg',
                'mp4': 'video/mp4',
                'mpa': 'audio/mpeg',
                'mpe': 'video/mpeg',
                'mpeg': 'video/mpeg',
                'mpega': 'audio/x-mpeg',
                'mpg': 'video/mpeg',
                'mpv2': 'video/mpeg2',
                'ms': 'application/x-wais-source',
                'nc': 'application/x-netcdf',
                'oda': 'application/oda',
                'odb': 'application/vnd.oasis.opendocument.database',
                'odc': 'application/vnd.oasis.opendocument.chart',
                'odf': 'application/vnd.oasis.opendocument.formula',
                'odg': 'application/vnd.oasis.opendocument.graphics',
                'odi': 'application/vnd.oasis.opendocument.image',
                'odm': 'application/vnd.oasis.opendocument.text-master',
                'odp': 'application/vnd.oasis.opendocument.presentation',
                'ods': 'application/vnd.oasis.opendocument.spreadsheet',
                'odt': 'application/vnd.oasis.opendocument.text',
                'otg': 'application/vnd.oasis.opendocument.graphics-template',
                'oth': 'application/vnd.oasis.opendocument.text-web',
                'otp': 'application/vnd.oasis.opendocument.presentation-template',
                'ots': 'application/vnd.oasis.opendocument.spreadsheet-template',
                'ott': 'application/vnd.oasis.opendocument.text-template',
                'ogx': 'application/ogg',
                'ogv': 'video/ogg',
                'oga': 'audio/ogg',
                'ogg': 'audio/ogg',
                'otf': 'application/x-font-opentype',
                'spx': 'audio/ogg',
                'flac': 'audio/flac',
                'anx': 'application/annodex',
                'axa': 'audio/annodex',
                'axv': 'video/annodex',
                'xspf': 'application/xspf+xml',
                'pbm': 'image/x-portable-bitmap',
                'pct': 'image/pict',
                'pdf': 'application/pdf',
                'pgm': 'image/x-portable-graymap',
                'pic': 'image/pict',
                'pict': 'image/pict',
                'pls': 'audio/x-scpls',
                'png': 'image/png',
                'pnm': 'image/x-portable-anymap',
                'pnt': 'image/x-macpaint',
                'ppm': 'image/x-portable-pixmap',
                'ppt': 'application/vnd.ms-powerpoint',
                'pps': 'application/vnd.ms-powerpoint',
                'ps': 'application/postscript',
                'psd': 'image/vnd.adobe.photoshop',
                'qt': 'video/quicktime',
                'qti': 'image/x-quicktime',
                'qtif': 'image/x-quicktime',
                'ras': 'image/x-cmu-raster',
                'rdf': 'application/rdf+xml',
                'rgb': 'image/x-rgb',
                'rm': 'application/vnd.rn-realmedia',
                'roff': 'text/troff',
                'rtf': 'application/rtf',
                'rtx': 'text/richtext',
                'sfnt': 'application/font-sfnt',
                'sh': 'application/x-sh',
                'shar': 'application/x-shar',
                'sit': 'application/x-stuffit',
                'snd': 'audio/basic',
                'src': 'application/x-wais-source',
                'sv4cpio': 'application/x-sv4cpio',
                'sv4crc': 'application/x-sv4crc',
                'svg': 'image/svg+xml',
                'svgz': 'image/svg+xml',
                'swf': 'application/x-shockwave-flash',
                't': 'text/troff',
                'tar': 'application/x-tar',
                'tcl': 'application/x-tcl',
                'tex': 'application/x-tex',
                'texi': 'application/x-texinfo',
                'texinfo': 'application/x-texinfo',
                'tif': 'image/tiff',
                'tiff': 'image/tiff',
                'tr': 'text/troff',
                'tsv': 'text/tab-separated-values',
                'ttf': 'application/x-font-ttf',
                'txt': 'text/plain',
                'ulw': 'audio/basic',
                'ustar': 'application/x-ustar',
                'vxml': 'application/voicexml+xml',
                'xbm': 'image/x-xbitmap',
                'xht': 'application/xhtml+xml',
                'xhtml': 'application/xhtml+xml',
                'xls': 'application/vnd.ms-excel',
                'xml': 'application/xml',
                'xpm': 'image/x-xpixmap',
                'xsl': 'application/xml',
                'xslt': 'application/xslt+xml',
                'xul': 'application/vnd.mozilla.xul+xml',
                'xwd': 'image/x-xwindowdump',
                'vsd': 'application/vnd.visio',
                'wav': 'audio/x-wav',
                'wbmp': 'image/vnd.wap.wbmp',
                'webp': 'image/octet-stream',
                'wml': 'text/vnd.wap.wml',
                'wmlc': 'application/vnd.wap.wmlc',
                'wmls': 'text/vnd.wap.wmlsc',
                'wmlscriptc': 'application/vnd.wap.wmlscriptc',
                'wmv': 'video/x-ms-wmv',
                'woff': 'application/font-woff',
                'woff2': 'application/font-woff2',
                'wrl': 'model/vrml',
                'wspolicy': 'application/wspolicy+xml',
                'z': 'application/x-compress',
                'zip': 'application/zip'
            },

            onInit: function () {
            },

            onAfterRendering: function () {
                let aParams = window.location.href.split('?').pop().split('&').splice(0, 2).join().split(",")
                aParams[0] = aParams[0].replace('=', '=\'') + "\'"
                aParams[1] = aParams[1].replace('=', '=\'') + "\'"
                this.getView().bindElement("/Maintenances(" + aParams.join() + ")")
                // this.getView().bindElement(this.getView().bindElement(sap.ui.component(sap.ui.core.Component.getOwnerIdFor(this.getView())).getComponentData()["startupParameters"]))
                setTimeout(function () {
                    let htmlpage = '<html><head>' + $("head").html() + '</head><body>' + $("#application-maintprint-display-component---Impressao--page-cont").html() + '</body></html>';
                    let win = window.open("", "PrintWindow");
                    win.document.write(htmlpage);
                    setTimeout(function () {
                        win.print();
                        win.stop();
                        win.close();
                        this.close()
                    }, 5000);
                }, 5000)
            },

            onPrint: function () {
                let htmlpage = '<html><head>' + $("head").html() + '</head><body>' + $("#application-brcomaegeaimpressao-display-component---Impressao--page-cont").html() + '</body></html>';
                let win = window.open("", "PrintWindow");
                win.document.write(htmlpage);
                setTimeout(function () {
                    win.print();
                    win.stop();
                    win.close();
                }, 5000);
            },

            onModelChange: function (oEvent) {
                let oObject = oEvent.getSource().getBindingContext()?.getObject()
                let oModel = this.getView().getModel("anexos")
                if (oObject) {
                    this.getView().byId("logo").setSrc(oModel.sServiceUrl + "/logoSet(Bukrs='" + oObject.CompanyCode + "')/$value")
                }
            },

            onAttachUpdate: function (oEvent) {
                let oTable = oEvent.getSource()
                let oObject = oTable.getBindingContext().getObject()
                let oModel = this.getView().getModel("anexos")
                let type = this.types
                this.getView().getModel().read("/Anexos", {
                    filters: [new sap.ui.model.Filter("DocumentKey", sap.ui.model.FilterOperator.EQ, oObject.MaintenanceDocument)],
                    success: function (oData, response) {
                        for (let i = 0; i < oTable.getItems().length; i++) {
                            let sMime = type[oData.results[i].Filename.substring(oData.results[i].Filename.lastIndexOf('.') + 1).toLowerCase()]
                            if (sMime.includes("image")) {
                                oTable.getItems()[i].getCells()[0].getItems()[0].setSrc(oModel.sServiceUrl + "/anexoSet(Documentkey='" + oData.results[i].DocumentKey + "',Documentnumber='" + oData.results[i].DocumentNumber + "')/$value")
                                oTable.getItems()[i].getCells()[0].getItems()[0].setVisible(true)
                                oTable.getItems()[i].getCells()[0].getItems()[1].setVisible(false)
                            } else {
                                let sValue
                                if (sMime.includes("video"))
                                    sValue = "sap-icon://attachment-video"
                                else if (sMime.includes("audio"))
                                    sValue = "sap-icon://attachment-audio"
                                else if (sMime.includes("text"))
                                    sValue = "sap-icon://attachment-text-file"
                                else if (sMime.includes("pdf"))
                                    sValue = "sap-icon://pdf-attachment"
                                else
                                    sValue = "sap-icon://attachment"

                                oTable.getItems()[i].getCells()[0].getItems()[0].setVisible(false)
                                oTable.getItems()[i].getCells()[0].getItems()[1].setVisible(true)
                                oTable.getItems()[i].getCells()[0].getItems()[1].setSrc(sValue)
                            }
                        }

                    },
                    error: function (oEvent) { console.log(oEvent) }
                })
            },

            formatDate: function (sValue) {
                if (sValue) {
                    let iValue = sValue * 1 + new Date().getTimezoneOffset() * 60 * 1000
                    return new Date(iValue).toLocaleDateString()
                }
            },

            formatTime: function (sValue) {
                if (sValue) {
                    let iValue = sValue.ms * 1 + new Date().getTimezoneOffset() * 60 * 1000
                    return new Date(iValue).toLocaleTimeString()
                }
            },

            formatNumber: function (sValue) {
                if (sValue)
                    return new Intl.NumberFormat('pt-BR').format(sValue)
            },

            formatImage: function (sValue) {
                if (sValue === undefined || sValue === null)
                    return "sap-icon://product";
                else
                    return "data:image/bmp;base64," + sValue.substr(104);
            }.bind(this),
        });
    });
