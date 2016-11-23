<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation was performed on a merchant account for which the status was not <span class="code-green">ACTIVE</span>.</p>

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
              "code": "account_not_active",
              "level": "error",
              "message": "Account is not active",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
