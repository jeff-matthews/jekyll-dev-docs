<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A payment operation was attempted with a payment object that has expired. This typically
      occurs if a saved card object is used after it has been marked expired due to the card
      expiration.</p>

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
              "code": "payment_method_expired",
              "level": "error",
              "message": "Payment method expired",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
