<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns an <span class="code-green">ach_account_closed</span> error code when an account involved in an ACH transaction is reported as closed.</p>
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
              "code": "ach_account_closed",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
