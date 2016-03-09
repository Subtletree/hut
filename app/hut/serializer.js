import DS from 'ember-data';

//export default DS.JSONAPISerializer.extend({
export default DS.JSONSerializer.extend({
  normalize(typeClass, hash) {
    hash.data = {
      id: hash.attributes.OBJECTID,
      type: 'hut',
      attributes: {
        status: hash.attributes.STATUS,
        hut_type: hash.attributes.OBJECT_TYPE_DESCRIPTION,
        name: hash.attributes.DESCRIPTION
      }
    };
    delete hash.attributes;
    return hash;
  }

});
