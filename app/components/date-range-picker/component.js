import Ember from 'ember';
import moment from "npm:moment";

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    if (Ember.isPresent(this.start)) {
      this.set('startInternal', this.start);
      this.set('endInternal', this.end);
    }
  },
  didInsertElement() {
    this._super(...arguments);
    var _this = this,
    $dateRange = this.$('.input-daterange');

    $dateRange.datepicker({
      format: "dd/mm/yyyy",
      orientation: "auto right"
    });

    $dateRange.find('[name="start"]').on('changeDate', function(e) {
      _this.set('startInternal', moment(e.date));
      _this.rangeChange();
      //Ember.run.throttle(_this, _this.rangeChange(), 50);
    });
    $dateRange.find('[name="end"]').on('changeDate', function(e) {
      _this.set('endInternal', moment(e.date));
      _this.rangeChange();
      //Ember.run.throttle(_this, _this.rangeChange(), 50);
    });

  },
  startInternal: '',
  endInternal: '',
  rangeChange: function() {
    var _this = this;
    if (Ember.isPresent(_this.get('startInternal')) && Ember.isPresent(_this.get('endInternal'))) {
      this.get('rangeChanged')(_this.get('startInternal'), _this.get('endInternal'));
    }
  },
  startDisplay: Ember.computed('startInternal', function() {
    return this.get('start') ? this.get('start').format('DD/MM/YYYY') : '';
  }),
  endDisplay: Ember.computed('endInternal', function() {
    return this.get('end') ? this.get('end').format('DD/MM/YYYY'): '';
  }),
  willDestroyElement: function () {
    this.$('.input-daterange').datepicker('destroy');
  }

});
