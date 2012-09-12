Ext.define("test.model.Marker", {
	extend: "Ext.data.Model",
	//requires: [
     //   'Ext.data.identifier.Uuid'
    //],
	config: {
		fields: [
			{name: "markerID", type:"string"},
	     {name: "title", type: "string"},
	 	 {name: "lng", type: "string"},
	 	 {name: "lat", type: "string"},
	 	 {name: "icon", type: "string"},
	 	 {name: "description", type: "string"}
		],
		proxy: {
            type: 'localstorage',
            id  : 'proxyMarkers'
        }
       // identifier: 'uuid'
    }
});
	

