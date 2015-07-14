var Link = ReactRouter.Link

var StickyNav = React.createClass({
  render: function() {
    return (
      <dl className="sub-nav">
        <dd>
          <Link to='pricing'>Compare Plans</Link>
        </dd>
        <dd>
          <Link to='commons-starter-pricing'>Commons Starter</Link>
        </dd>
        <dd>
          <Link to='commons-unlimited-pricing'>Commons Unlimited</Link>
        </dd>
        <dd>
          <Link to='dedicated-desks-pricing'>Desks</Link>
        </dd>
        <dd>
          <Link to='offices-pricing'>Offices</Link>
        </dd>
      </dl>
    )
  }
});

module.exports = StickyNav;
