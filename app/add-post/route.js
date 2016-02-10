import Ember from 'ember';

export default Ember.Route.extend({
    model() {
            return {
                data: this.store.findAll('post'),
                post: {}
            };
        },
        actions: {
            createPost(info) {
                let newPost = this.store.createRecord('post', {
                    title: info.title,
                    body: info.body,
                    author: info.author,
                    date: new Date()
                });

                newPost.save();
            }
        }
});