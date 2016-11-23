<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns a <span class="code-green">no_payment_method</span> error code if a payment API is invoked without
      providing any payment details in the request content.</p>

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
              "code": "no_payment_method",
              "level": "error",
              "message": "No payment method was specified",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
