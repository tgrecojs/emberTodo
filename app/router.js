import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('add-post');
  this.route('blog', {
  	path: '/'
  });
});

export default Router;
