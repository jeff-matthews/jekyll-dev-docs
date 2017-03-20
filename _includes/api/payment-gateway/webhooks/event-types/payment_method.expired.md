<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Saved customer payment methods that contain expiration dates, such as <a href="#card" style="font-family:monospace">card</a>, generate
      <span class="code-green">payment_method.expired</span> events upon expiration. For cards, the expired event is sent on the first day of the month following the card expiration month. The payment method is included in the content of the
      event's <span class="code-green">data</span> property.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "O5r6bWvHQZ2kW3QjAMV6Xg",
      "created": "2016-12-01T03:00:03.842Z",
      "type": "payment_method.expired",
      "data": {
          "id": "&#95;&#95;v0aP-&#95;QfKsD61ZBkcjPg",
          "created": "2016-11-21T03:01:10.485Z",
          "modified": "2016-11-21T03:01:10.485Z",
          "type": "card",
          "name": "Some Customer",
          "number": "************4242",
          "card_type": "VISA",
          "exp_month": 11,
          "exp_year": 2020,
      }
  }</code>
  </pre>
</div>
