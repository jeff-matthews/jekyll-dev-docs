<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Marking a recurring charge occurrence ignored creates a new <span class="code-green">recurring_charge.occurrence.ignored</span> event. The event's <span class="code-green">data</span> property contains the content of the occurrence.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "VzWIEdExS-qQs-pnNcuxdA",
      "created": "2016-07-01T02:06:18.174Z",
      "type": "recurring_charge.occurrence.ignored",
      "data": {
          "id": "LDJtMP40T6WXLPYJxlsMQQ",
          "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
          "amount": 150,
          "status": "IGNORED",
          "due_date": "2020-01-01",
          "attempts": 0
      }
  }</code>
  </pre>
</div>
