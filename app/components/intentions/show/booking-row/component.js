import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'tr',
  isHut: Ember.computed('booking.bookingType', function() {
    return this.get('booking.bookingType') === 'hut';
  })
});
