<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>You must configure your server to receive <em>and</em> respond to webhook POST requests. AffiniPay is expecting HTTP status codes in response to webhooks. If your server doesn't respond with a <b>200 OK</b> message after receiving an event, AffiniPay will attempt to resend the event once every 10 minutes for a maximum of 25 attempts.</p>

      <p><span class="panel-tip"><b>Tip:</b> The server endpoint must correspond with the <b>Event URL</b> you previously specified in your AffiniPay OAuth Partner Application.</span></p>
    </div>
  </div>
</div>
