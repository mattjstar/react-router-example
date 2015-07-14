var WeStickyIcky = React.createClass({
  getDefaultProps: function() {
    return {
      topLock: true,
      topOffset: 0,
      bottomLock: false,
      bottomOffset: 0
    };
  },

  componentDidMount: function() {
    var stickyNav = $('#content .sticky-nav')

    $(window).on('scroll resize', function (e) {
      if (this.props.topLock) {
        this.toggleNavToTop(stickyNav)
      }

      if (this.props.bottomLock) {
        this.toggleNavToBottom(stickyNav)
      }
    }.bind(this)).trigger('scroll')
  },

  render: function() {
    return (
      <div className="we-sticky-icky sticky-nav">
        <div className="inner">
          {this.props.children}
        </div>
      </div>
    )
  },

  toggleNavToTop: function(stickyNav) {
    var viewportHeight = $(window).height()
    var contentOffsetFromTop = $("#pricing-content").offset().top
    var stickyNavHeight = stickyNav.height()
    var shouldLockTop = $(window).scrollTop() > contentOffsetFromTop - this.props.topOffset
    stickyNav.toggleClass("top-locked", shouldLockTop)
  },

  toggleNavToBottom: function(stickyNav) {
    var viewportHeight = $(window).height()
    var contentOffsetFromTop = $("#content").offset().top
    var viewableOffset = contentOffsetFromTop - ($(window).scrollTop())
    var shouldLock = viewableOffset > viewportHeight - this.props.bottomOffset
    stickyNav.toggleClass("bottom-locked", shouldLock)
  }
});

module.exports = WeStickyIcky;
