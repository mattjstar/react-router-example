var Route = ReactRouter.Route,
    RouteHandler = ReactRouter.RouteHandler;

var PricingRouter = React.createClass({
  mixins: [ReactRouter.State],

  componentDidMount: function() {
    // Save initial path as referrer
    this.oldPath = this.getPath();
  },

  componentDidUpdate: function() {
    // Track page views with segement.io only when route updates:
    if ( this.oldPath != this.getPath() ) {
      // analytics.page(null, {
      //   referrer: this.oldPath
      // });

      this.oldPath = this.getPath();
    }
  },

  render: function() {
    return (
      <div>
        <WeStickyIcky>
          <PricingTabs />
        </WeStickyIcky>

        <RouteHandler />
      </div>
    )}
});

// react-router-rails looks for this React element and
// replaces the functionality of Router.run that is
// normally requried for react router to work
window.PricingRoutes = (
  <Route handler={PricingRouter} ignoreScrollBehavior>
    <Route name="pricing" path="/pricing" handler={PricingTable} />
    <Route name="commons-starter-pricing" path="/commons-starter-pricing" handler={PricingCommonsStarter} />
    <Route name="commons-unlimited-pricing" path="/commons-unlimited-pricing" handler={PricingCommonsUnlimited} />
    <Route name="dedicated-desks-pricing" path="/dedicated-desks-pricing" handler={PricingDedicatedDesk} />
    <Route name="offices-pricing" path="/offices-pricing" handler={PricingDedicatedOffice} />
  </Route>
);

module.exports = PricingRouter;
