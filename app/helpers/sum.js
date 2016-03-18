import Ember from 'ember';

export function sum(params/*, hash*/) {
  var total = 0;
   for (var i = 0, n = params.length; i < n; ++i) {
     // Use prefix + to coerce to a number so that += doesn't do
     // string concatenation.
     total += +params[i];
   }
  return total;
}

export default Ember.Helper.helper(sum);
