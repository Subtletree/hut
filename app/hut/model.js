import DS from 'ember-data';

export default DS.Model.extend({
  hut_type:  DS.attr('string'),
  status: DS.attr('string'),
  name: DS.attr('string')
});
