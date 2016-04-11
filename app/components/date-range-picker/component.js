import Ember from 'ember';

export default Ember.Component.extend({
  didInsertElement() {
    this._super(...arguments);
    var $dateRange = this.$('.input-daterange');
    $dateRange.datepicker({
      format: "dd/mm/yyyy",
      orientation: "auto right"
    });
    $dateRange.find('[name=start]').on('changeDate', function(e) {

    });
    $dateRange.find('[name=end]').on('changeDate', function(e) {

    });

  }

});
