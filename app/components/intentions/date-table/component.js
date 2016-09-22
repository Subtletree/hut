import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  tagName: 'table',
  sortProperties: ['isoDate'],
  sortedBookings: Ember.computed.sort('intention.bookings', 'sortProperties')
});
