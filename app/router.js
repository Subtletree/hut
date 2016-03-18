import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('login');
  this.route('huts', function() {
    this.route('show');
    this.route('search');
  });
  this.route('intentions', function() {
    this.route('new');
    this.route('show');
  });
});

export default Router;
