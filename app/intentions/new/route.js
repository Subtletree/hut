import Ember from 'ember';
import IntentionDatesHandler from 'hut/mixins/intention-dates-handler';

export default Ember.Route.extend(IntentionDatesHandler, {
  model() {
    return this.store.createRecord('intention');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        this.store.unloadAll('booking');
        model.unloadRecord();
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
