<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>In response to the creation of a new recurring charge occurrence, a corresponding <span class="code-green">recurring_charge.occurrence.created</span> event is also created. Note that the creation of any recurring charge will also create the initial occurrence for that recurring charge, resulting in at least two events (and possibly more if the initial occurrence is paid immediately). The event's <span class="code-green">data</span> property contains the JSON content of the newly created occurrence.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "3nA46a9yQAKF4A7kVcThyA",
      "created": "2016-07-01T01:55:12.473Z",
      "type": "recurring_charge.occurrence.created",
      "data": {
          "id": "LDJtMP40T6WXLPYJxlsMQQ",
          "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
          "amount": 145,
          "status": "PENDING",
          "due_date": "2020-01-01",
          "attempts": 0
      }
  }</code>
  </pre>
</div>
