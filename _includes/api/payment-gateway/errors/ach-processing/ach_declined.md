<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If the ACH processor declines the transaction the Gateway returns a <span class="code-green">ach_declined</span> error
      and rejects the request.</p>
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
              "code": "ach_declined",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code></pre>
</div>
