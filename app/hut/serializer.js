import DS from 'ember-data';

//export default DS.JSONAPISerializer.extend({
export default DS.JSONSerializer.extend({

  // Override normalize for arrays
  normalize(typeClass, hash) {
    return this.mungePayload(hash);
  },
  // Override normalize for single record
  normalizeSingleResponse(a,b,record) {
    return this.mungePayload(record[0]);
  },
  // rename attributes and format correctly
  mungePayload(record) {
    var hash = {};
    hash.data = {
      id: record.attributes.OBJECTID,
      type: 'hut',
      attributes: {
        status: record.attributes.STATUS,
        hutType: record.attributes.OBJECT_TYPE_DESCRIPTION,
        name: record.attributes.DESCRIPTION
      }
    };
    return hash;
  }

});
