<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation was attempted as a merchant, but the merchant has been suspended or made inactive.</p>

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
              "code": "merchant_not_active",
              "level": "error",
              "message": "Merchant is not active",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
