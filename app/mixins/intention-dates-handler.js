import Ember from 'ember';

export default Ember.Mixin.create({
  actions: {
    updateDates: function(start, end) {
      var model = this.controller.get("model");
      model.set('startDate', start);
      model.set('endDate', end);
      this.syncBookings(model);
    }
  },
  syncBookings: function(model) {
    var current = model.get('startDate').clone(),
    end = model.get('endDate').clone(),
    datesHolder = [];
    // create new bookings for each date if they dont exist yet
    while(current <= end) {
      let formattedDate = current.format('YYYY/MM/DD');
      if (model.get('bookings').filterBy('isoDate', formattedDate).length === 0) {
        let booking = this.get('store').createRecord('booking', {
          date: current.clone()
        });
        model.get('bookings').addObject(booking);
      }
      datesHolder.push(formattedDate);
      current.add(1,'d');
    }
    // Make array of bookings to unload (Had problem unloading booking within the first loop)
    var bookingsToUnload = [];
    model.get('bookings').forEach(function(booking) {
      if (booking && datesHolder.indexOf(booking.get('date').format('YYYY/MM/DD')) === -1) {
        bookingsToUnload.push(booking);
      }
    });
    // Unload bookings in array
    bookingsToUnload.forEach(function(booking) {
      booking.unloadRecord();
    });
  }
});
