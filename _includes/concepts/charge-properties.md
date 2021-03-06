The charge object should include the following properties:

- <span class="code-green">amount</span> - The total payment amount in cents (e.g., $500.00 = 50000).
- <span class="code-green">method</span> - The saved card, saved bank, or one-time token <span class="code-green">id</span> to use to run the payment. {{site.data.notes.token-ttl}}
- <span class="code-green">account_id</span> - The ID of the AffiniPay [merchant account](../basics/account-management.html#merchant-accounts) that should receive payment.
