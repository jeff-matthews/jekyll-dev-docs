<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>The Gateway's streamlined transaction API simplifies the process of submitting payments{% if user == 'tenant' %}, applying refunds to those payments, and
      transferring funds{% else %} and applying refunds to those payments{% endif %}. The
      <a href="#charges">Charge</a> API submits a payment request using a customer's payment details.
      The Gateway automatically performs funds capture daily and initiates settlement.
      <a href="#refunds">Refund</a> can be performed at any time after the Charge, in any number,
      up to the amount of the Charge.</p>

      <p>The API also includes methods for retrieving individual transactions by ID,
      as well as a search operation that returns paginated results based on criteria
      specified by the caller.</p>
    </div>
  </div>
</div>
