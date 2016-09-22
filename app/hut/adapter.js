import Ember from 'ember';
import DS from 'ember-data';

export default  DS.JSONAPIAdapter.extend({
  service: 'DOC_Huts',
  layer: 0,
  folder: 'GeoportalServices',
  host: 'http://geoportal.doc.govt.nz',
  data: {
    outFields: '*',
    returnGeometry: false,
    inSR: 4326,
    f: 'json'
  },

  findQuery: function (store, type, query) {
    var url = this.buildURL(),
      data = this.get('data');

    Ember.$.extend(data, query);

    return this.ajax(url, 'GET', {
      data: data
    });
  },

  findRecord: function (store, type, record) {
    var url = this.buildURL(),
      data = this.get('data');

    data.where = "OBJECTID='" + record + "'";

    return this.ajax(url, 'GET', {
      data: data
    });
  },

  // Doesn't return geometry for performance reasons, use the query to do that.
  findAll: function (/*store, type, sinceToken*/) {
    var url = this.buildURL(),
      data = this.get('data');

    // Returns all items
    data.where = '1=1';

    return this.ajax(url, 'GET', {
      data: data
    });
  },

  ajaxOptions: function (url, type, hash) {
    hash = hash || {};

    if (hash.data && type !== 'GET') {
      hash.contentType = 'application/json; charset=utf-8';
      hash.data = JSON.stringify(hash.data);
    }

    if (this.headers !== undefined) {
      var headers = this.headers;

      hash.beforeSend = function (xhr) {
        Ember.keys(headers).getEach(function (key) {
          xhr.setRequestHeader(key, headers[key]);
        });
      };
    }

    Ember.$.extend(hash, {
      crossDomain: true,
      dataType: 'jsonp',
      url: url,
      type: type,
      context: this
    });

    return hash;
  },

  buildURL: function (/*type, id*/) {
    var host = this.get('host'),
      namespace = this.get('namespace');

    return host + namespace;
  },

  ajax: function (url, type, hash) {
    var adapter = this;

    return new Ember.RSVP.Promise(function (resolve, reject) {
      hash = adapter.ajaxOptions(url, type, hash);

      hash.success = function (json) {
        if (json && json.features) {
          Ember.run(null, resolve, json.features);
        }
        else {
          Ember.run(null, reject, 'No Data');
        }
      };

      hash.error = function (jqXHR/*, textStatus, errorThrown*/) {
        Ember.run(null, reject, adapter.ajaxError(jqXHR));
      };

      Ember.$.ajax(hash);
    }, 'App: ArcGisAdapter#ajax ' + type + ' to ' + url);
  },

  namespace: function () {
    var folder = this.get('folder'),
      service = this.get('service'),
      layer = this.get('layer');

    return '/ArcGIS/rest/services/' + folder + '/' + service + '/MapServer/' + layer + '/query';
  }.property('folder', 'service', 'layer')
});
