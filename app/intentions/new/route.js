import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('intention');
  },
  resetController(controller, isExiting) {
    if (isExiting) {
      var model = controller.get('model');
      if (model.get('isNew')) {
        model.unloadRecord();
      }
    }
  },
  actions: {
    save() {
      console.log(this.get('model'));
      var model = this.controller.get("model");
      var _this = this;
      model.save().then(function(intention) {
        _this.transitionTo('intentions.show', intention);
      }, function(reason) {
      });
    }
  }
});
