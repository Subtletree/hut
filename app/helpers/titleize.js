import Ember from 'ember';

export function titleize(params/*, hash*/) {
  return params[0].decamelize().replace(/_/g, ' ').capitalize();
}

export default Ember.Helper.helper(titleize);
