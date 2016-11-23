<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation was attempted in a merchant mode (LIVE or TEST, depending on the credentials
      provided) that was not permitted on the target resource. For example, attempting to perform
      a charge in LIVE mode against an account of type TEST.</p>

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
              "code": "unavailable_for_merchant_mode",
              "level": "error",
              "message": "Mode LIVE not supported for account of type TEST",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
