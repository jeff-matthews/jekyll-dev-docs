<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>If either bank account involved in an ACH transaction cannot be found during execution of the transaction, the Gateway returns an <span class="code-green">ach_account_not_found</span> error code.</p>
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
              "code": "ach_account_not_found",
              "level": "error",
              "facility": "payment_processor"
          }
      ]
  }</code>
  </pre>
</div>
