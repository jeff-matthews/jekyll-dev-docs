<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway returns an <span class="code-green">ach_invalid_merchant_configuration</span> error code if an ACH
      transaction cannot be carried out successfully due to a configuration issue with
      the associated ACH merchant account. Contact the Tenant that provisioned the
      account to resolve the issue. The ID of the failed transaction is returned in the
      <span class="code-green">entity_id</span> property.</p>
      <dl class="dl-horizontal">
        <dt>Level</dt>
        <dd>error</dd>
        <dt>HTTP Status Code</dt>
        <dd>500</dd>
      </dl>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "messages": [
          {
              "code": "ach_invalid_merchant_configuration",
              "level": "error",
              "facility": "gateway",
              "entity_id": "jCEP6Mn3Q2Cg4nS3qqqDuw"
          }
      ]
  }</code>
  </pre>
</div>
