import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  mobileNumber: DS.attr('string'),
  firstName: DS.attr('string'),
  password: DS.attr('string'),
  passwordConfirmation: DS.attr('string'),
  intentions: DS.hasMany('intention')
});
