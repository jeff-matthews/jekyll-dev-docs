<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns an <span class="code-green">ach_limit_exceeded</span> error code if the ACH processor reports
      a transaction has exceeded the authorized limit.</p>
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
              "code": "ach_limit_exceeded",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
