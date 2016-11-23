<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>When the balance of an account providing funds for an ACH transaction is insufficient to cover the value of the transaction, the Gateway returns an <span class="code-green">ach_insufficient_funds</span> error code.</p>
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
              "code": "ach_insufficient_funds",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
