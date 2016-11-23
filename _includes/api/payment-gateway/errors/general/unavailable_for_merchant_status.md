<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation on a merchant was prohibited due to the status of the merchant.</p>
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
              "code": "unavailable_for_merchant_status",
              "level": "error",
              "message": "The operation cannot be completed due to the current merchant status",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
