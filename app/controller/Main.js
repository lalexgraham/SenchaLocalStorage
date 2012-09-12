Ext.define('test.controller.Main', {
    extend: 'Ext.app.Controller',
	config: {
		refs: {listMarkersCard:'listMarkersCard'},
		control: {
			listMarkersCard : {
				show: 'loadMarkers'
			}
		}
	},
	loadMarkers: function() {
		//set up refs to the two stores
		var markerStore = Ext.getStore('markerStore');
		var markerStoreLocalStorage= Ext.getStore('markerStoreLocalStorage');
		
		//load the localStorage store
		markerStoreLocalStorage.load();
		
		// check if localStorage contains data
		if ((markerStoreLocalStorage.getCount()) == 0) {
			// nothing found so  we need to load the data from external source
			console.log('localStorage data not found');
			//hand off to onMarkerStoreLoad function (below)
			markerStore.on({
			    load: 'onMarkerStoreLoad',
			    scope: this
			});
			//call load to trigger above
			markerStore.load();
		} else {
			// we are ok, just print some debug
			console.log('localStorage data found');
			console.log('localStorage count:' + markerStoreLocalStorage.getCount());
		}
		//finally set the list's store to localStorage
		this.getListMarkersCard().setStore(markerStoreLocalStorage);
		
	},
	onMarkerStoreLoad: function() {
		//set up refs
		var markerStoreLocalStorage= Ext.getStore('markerStoreLocalStorage');
		var markerStore = Ext.getStore('markerStore');
        	//loop through each data item and add to localStorage
		markerStore.each(function(item){
			markerStoreLocalStorage.add(item);
		});
		markerStoreLocalStorage.sync();
   	 }
});
