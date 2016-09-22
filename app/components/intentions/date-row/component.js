import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: 'tr',
  actions: {
    searchRepo(term) {
      if (Ember.isBlank(term)) { return []; }

      var service = 'DOC_Huts',
      layer = 0,
      folder = 'GeoportalServices',
      host = '//geoportal.doc.govt.nz',
      data = {
        outFields: '*',
        returnGeometry: false,
        inSR: 4326,
        f: 'json',
        where: "DESCRIPTION LIKE '%" + term + "%'"
      };
      var url = host + '/ArcGIS/rest/services/' + folder + '/' + service + '/MapServer/' + layer + '/query';

      return Ember.$.ajax({
                url: url,
                data: data,
                dataType: 'jsonp',
                method: 'GET'
              }).then(json => json.features);

    },
    setHut: function(hutJson) {
      if (hutJson === undefined) {
        return;
      }
      if (hutJson === null) {
        this.set('booking.bookingType', 'nohut');
        //this.set('selected', undefined);
        this.set('booking.hut', undefined);
        return;
      }
      var hut = this.get('store').push({
        data: {
          id: hutJson.attributes.OBJECTID,
          type: 'hut',
          attributes: {
            hutType: hutJson.attributes.OBJECT_TYPE_DESCRIPTION,
            status: hutJson.attributes.STATUS,
            name: hutJson.attributes.DESCRIPTION
          },
          relationships: {}
        }
      });
      this.set('booking.bookingType', 'hut');
    //  this.set('selected', hutJson);
      this.set('booking.hut', hut);
    }
  }
});
