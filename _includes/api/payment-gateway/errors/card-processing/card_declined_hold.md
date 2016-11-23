<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A payment processor that responds to an authorize or charge request with a "Hold"
      response (meaning the card has been reported stolen or fraudulently used, and should
      be physically held and reported to the issuer) will cause the Gateway to return a
      <span class="code-green">card_declined_hold</span> error to the caller, allowing the caller to carry out the hold request.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>

  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "card_declined_hold",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
