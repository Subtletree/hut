import DS from 'ember-data';
import RailsJsonApiSerializer from 'hut/serializers/application';


export default RailsJsonApiSerializer.extend(DS.EmbeddedRecordsMixin, {
  // https://ember-twiddle.com/24893e21e87f065b1d48?fileTreeShown=false&openFiles=serializers.author.js%2C
  _serializeEmbeddedHasMany(snapshot, json, relationship) {
    this._super(...arguments);
    this._hasManyDataEmbedded(json, relationship);
  },

  _hasManyDataEmbedded(json, relationship) {
    if (relationship.kind !== 'hasMany') {
      return;
    }
    let key = relationship.key.dasherize();
    let data = json[key].mapBy('data');
    delete json[key];
    if (!json.relationships) {
      json.relationships = {};
    }
    json.relationships[key] = {
      data
    };
  },

  attrs: {
    bookings: { embedded: 'always' }
  }
});
