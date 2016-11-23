<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>Changes to a recurring charge can result in the current pending occurrence (that is, the occurrence associated with the
      next payment due) to be updated as well. For example, changes to the amount to be collected for each payment, or the
      collection schedule, can impact the next payment. Updates such as these cause a new <span class="code-green">recurring_charge.occurrence.updated</span> event to be created, containing the updated version of the occurrence in the <span class="code-green">data</span> property of the event.</p>
    </div>
  </div>
  <blockquote><p>Example</p></blockquote>

  <pre><code class="json">{
      "id": "ifm_2OFVT3iw6H9tHE0IFg",
      "created": "2014-07-01T01:59:36.669Z",
      "type": "recurring_charge.occurrence.updated",
      "data": {
          "id": "LDJtMP40T6WXLPYJxlsMQQ",
          "recurring_charge_id": "DUPzt5y7RVGmnSW4BJegbQ",
          "amount": 150,
          "status": "PENDING",
          "due_date": "2020-01-01",
          "attempts": 0
      }
  }</code>
  </pre>
</div>
