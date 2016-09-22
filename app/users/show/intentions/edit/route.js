import Ember from 'ember';
import IntentionDatesHandler from 'hut/mixins/intention-dates-handler';

export default Ember.Route.extend(IntentionDatesHandler, {
  model(params) {
    return this.store.findRecord('intention', params.intention_id);
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      model.get('bookings').filterBy('isNew').invoke('unloadRecord');
      if (model.get('hasDirtyAttributes')) {
        model.rollbackAttributes();
      }
    }
  },
  actions: {
    save() {
      var model = this.controller.get("model");
      var _this = this;
      model.save().then(function(intention) {
        _this.transitionTo('users.show.intentions.show', intention);
      }, function(reason) {
      });
    }
  }
});
