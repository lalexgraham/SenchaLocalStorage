Ext.define('test.store.MarkersLocalStorage', {
	extend: "Ext.data.Store",
	//requires: [
    //    'Ext.data.proxy.LocalStorage'
    //],
	config: {
		storeId: 'markerStoreLocalStorage',
		model: "test.model.Marker"
		//autoLoad: true
	}
});





