<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway's recurring charge support makes it easy to collect payments from
      your customers on an ongoing, scheduled basis &mdash; from simple donations to more complicated installment plans.</p>
      <p>Start by <a href="../reference/api.html#create-recurring-charge" target="&#95;">creating a new recurring charge</a>, which includes:
        <ul>
          <li>Defining how much to collect</li>
          <li>Specifying a payment method to use</li>
          <li>Configuring the payment schedule and optional limits</li>
        </ul>
      <p><span class="panel-tip"><b>Tip:</b> We highly recommend masking payment details you collect using tokenization. {{site.data.notes.use-tokens}}</span></p>
      <p>The Gateway tracks each scheduled payment using an <a href="../reference/api.html#recurring_charge_occurrence" target="&#95;">occurrence</a> instance, which lets you know the status of the payment and what transaction(s) were created to collect that payment. Through the APIs, you can:</p>
        <ul>
          <li><a href="../reference/api.html#list-recurring-charges" target="&#95;">View</a> all your recurring charges and their associated <a href="../reference/api.html#list-occurrences" target="&#95;">occurrences</a></li>
          <li><a href="../reference/api.html#update-recurring-charge" target="&#95;">Edit</a> recurring charges</li>
          <li>Perform <a href="../reference/api.html#pay-occurrence" target="&#95;">operations</a> on individual payments.</li>
        </ul>
      </p>
    </div>
  </div>
</div>
