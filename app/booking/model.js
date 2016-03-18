import DS from 'ember-data';

export default DS.Model.extend({
  bookingType: DS.attr('string'),
  hut: DS.belongsTo('hut'),
  intention: DS.belongsTo('intention'),
  comment: DS.attr('string'),
  date: DS.attr('date')
});
