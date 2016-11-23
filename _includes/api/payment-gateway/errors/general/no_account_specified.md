<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>No merchant account was specified for a request that requires an account.</p>
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
              "code": "no_account_specified",
              "level": "error",
              "message": "An account ID must be specified",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
