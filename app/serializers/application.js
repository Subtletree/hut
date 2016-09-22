import Ember from 'ember';
import DS from 'ember-data';

var underscore = Ember.String.underscore,
RailsJsonApiSerializer = DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return underscore(attr);
  },

  keyForRelationship: function(rawKey) {
    return underscore(rawKey);
  }
});

export default RailsJsonApiSerializer;
