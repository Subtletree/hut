import DS from 'ember-data';

export default DS.Model.extend({
  email: DS.attr('string'),
  mobile_number: DS.attr('string'),
  first_name: DS.attr('string'),
  password: DS.attr('string'),
  password_confirmation: DS.attr('string'),
  intentions: DS.hasMany('intention')
});
