<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Configuring your system to receive Events via the Gateway's webhooks is as simple as
      defining a URL capable of handling a POST request. For example, in a Ruby on Rails
      application, you would define a new route and associated controller to receive the
      Event.</p>
      <p>You must configure your server to receive and respond to webhook POST requests. AffiniPay is expecting HTTP status codes in response to webhooks. If your server doesn't respond with a 200 OK message after receiving an event, AffiniPay will attempt to resend the event a maxmimum of 6 times, with an initial 1-hour delay that increases by 1 hour for each failed attempt (e.g., first attempt at time t0, second attempt at t0 + 1 hour, third attempt at t0 + 2 hours, etc).</p>
      <p>Event POSTs contain the full Event content as JSON formatted data in the request body.
      Because the URL receiving the webhook request is publicly visible, we recommend that
      integrating systems track previously processed Event IDs to avoid any possible replay
      attacks from external parties. External systems that require trust in the Event data
      should only treat the received webhook as a hint and always retrieve the Event content
      from the Gateway directly, using the <a href="#events">Events</a> API.</p>
    </div>
  </div>
</div>
