<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">

    <p>If a payment API is invoked providing a payment method (a bank or card) for which no
    supporting account is configured on the merchant, a <span class="code-green">no_account_for_payment_method</span>
    error is returned. For example, a bank charge performed on a merchant with no ACH
    account configured will raise this error.</p>
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
              "code": "no_account_for_payment_method",
              "level": "error",
              "message": "Merchant does not have an account that supports the requested payment method",
              "facility": "gateway"
          }
      ]
  }</code>
  </pre>
</div>
