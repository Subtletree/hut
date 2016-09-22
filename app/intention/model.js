import DS from 'ember-data';
//import moment from "npm:moment";

export default DS.Model.extend({
  name: DS.attr('string'),
  participants: DS.attr('string'),
  numberOfParticipants: DS.attr('number'),
  emergencyName: DS.attr('string'),
  emergencyNumber: DS.attr('string'),
  startDate: DS.attr('momentdate'),
  endDate: DS.attr('momentdate'),
  user: DS.belongsTo('user'),
  bookings: DS.hasMany('booking')
});
