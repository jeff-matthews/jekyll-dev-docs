<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding"><blockquote><p>Example</p></blockquote>
      <p>If a payment processor indicates a card has reached a spending limit, the Gateway returns a <span class="code-green">card_declined_limit_exceeded</span> error code to the  caller and rejects the request.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>422</dd>
      </dl>
    </div>
  </div>

  <blockquote>Example</blockquote>
  <pre><code class="json">{
      "messages": [
          {
              "code": "card_declined_limit_exceeded",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
