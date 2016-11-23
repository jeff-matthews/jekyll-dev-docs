<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>An operation was attempted by a merchant that is prohibited by the merchant's policy;
      for example, an attempt to perform a credit when credit operations are not enabled for
      the target account.</p>

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
              "code": "unavailable_for_merchant_policy",
              "level": "error",
              "message": "The operation is unavailable due to the current merchant policy",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
