import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  participants: DS.attr('string'),
  number_of_participants: DS.attr('number'),
  emergency_name: DS.attr('string'),
  emergency_number: DS.attr('string'),
  user: DS.belongsTo('user'),
  bookings: DS.hasMany('booking')
});
