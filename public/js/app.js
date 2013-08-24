$(function() {
  function AppViewModel() {
    this.name = ko.observable('Kensuke');
    this.age = ko.observable(33);

    this.update = function() {
      var self = this;
      $.post('/api/hello', {name: self.name, age: self.age}).done(function(data) {
        self.name(data.name);
        self.age(data.age);
      });
    };
  };

  ko.applyBindings(new AppViewModel());
});