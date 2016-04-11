import Ember from 'ember';

export default Ember.Component.extend({
  init() {
    this._super();
    this.set('store', Ember.inject.service());
    this.set('user', this.get('store').createRecord('user'));
  },
  willDestroyElement() {
    this._super();
    var user = this.get('user');
    if (user.get('isNew')) {
      user.unloadRecord();
    }
  },
  actions: {
    save() {
      var _this = this;
      this.get('user').save().then(function() {
        var credentials = {identification: _this.get('user.email'), password: _this.get('user.password')};
        _this.sendAction('authenticate', credentials);
      }, function(reason) {
      });
    }
  }
});
