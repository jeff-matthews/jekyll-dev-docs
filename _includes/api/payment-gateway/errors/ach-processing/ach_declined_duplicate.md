<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An ACH processor may reject a transaction if it appears to be a duplicate of a previous transaction. In this case, the Gateway returns an <span class="code-green">ach_declined_duplicate</span> error code to the caller.</p>
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
              "code": "ach_declined_duplicate",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
