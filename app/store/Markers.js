Ext.define('test.store.Markers', {
	extend: "Ext.data.Store",
	requires: [
        'Ext.data.proxy.JsonP'
    ],
	config: {
		storeId: 'markerStore',
		model: "test.model.Marker",
		proxy: {
			type: 'jsonp',
			callbackKey: 'callback',
        	url: 'http://localhost:5000/markers',
			reader: {
			    type: 'json',
			    rootProperty: 'data',
			    successProperty: 'success'
			}
  	 	}
	}
});


