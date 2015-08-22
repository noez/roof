var Header = (function(){

  var h = {
    init: function() {

      this.open = false;

      this.elements = {
        'brand' : $('.header__brand'),
        'logo' : $('.logo'),
        'trigger': $('.trigger-nav'),
        'container' : $('.container'),
        'win' : $(window)
      };

      this.bind();
      return this;
    },

    bind: function(){
      var self = this;

      this.elements.win.on('load resize', function(){
        var offsetLeft =  Math.ceil ( ( $( this ).outerWidth() - self.elements.container.outerWidth() ) / 2 );

        var spacing = 148;

        self.elements.brand.css({
          'margin-left': offsetLeft + spacing
        });

        self.elements.logo.css({
          'width' : offsetLeft + spacing,
          'margin-left': -offsetLeft - spacing
        });

        self.elements.trigger.css({
          'right' : offsetLeft + 40
        })

      });

      this.elements.trigger.on('click', function (ev) {
        ev.preventDefault();
        self.toggle();
      });

    },
    toggle: function(){
      var self = this;
      var doc = $(document.body);

      if(this.open) {
        doc.removeClass('nav-active');
      } else {
        doc.addClass('nav-active');
      }

      this.open =!this.open;
    }
  };

  return h.init();
})();

var Detail = (function () {
  var d = {
    init: function(){

      this.cache();
      this.bind();
      console.log(this.trigger.length > 0);
      return this;
    },
    cache: function(){
      this.el = $('div.detail');
      this.trigger = $('.detail a.action-button');
      this.back = $('.detail a.detail__back');
    },
    bind: function() {

      var self = this;

      this.trigger.on('click', function (ev) {
        ev.preventDefault();
        self.openForm();
      });

      this.back.on('click', function (ev) {
        ev.preventDefault();
        self.closeForm();
      });

    },
    openForm: function(){
      this.el.addClass('detail--open');
    },
    closeForm: function(){
      this.el.removeClass('detail--open');
    },
  }

  return d.init()
})();
