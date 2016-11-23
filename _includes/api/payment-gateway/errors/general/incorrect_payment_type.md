<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

      <p>A transaction was performed that supplied payment details that were not applicable for the
      underlying account.</p>
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
              "code": "incorrect_payment_type",
              "level": "error",
              "message": "Payment method type not supported by the target account",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
