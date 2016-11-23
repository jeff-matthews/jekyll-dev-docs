<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If a payment processor indicates a card was declined with a referral to the issuer,
      the Gateway returns a <span class="code-green">card_declined_refer_to_issuer</span> error.</p>
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
              "code": "card_declined_refer_to_issuer",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
