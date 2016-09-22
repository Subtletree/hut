import DS from 'ember-data';

export default DS.Model.extend({
  hutType:  DS.attr('string'),
  status: DS.attr('string'),
  name: DS.attr('string'),
  bookings: DS.hasMany('booking')
});
