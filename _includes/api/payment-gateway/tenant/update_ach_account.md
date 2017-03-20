Update ACH Account
-----------------------

    PUT /v1/ach-accounts/{accountId}

An existing Merchant [ACH Account](types#achaccount-section) is updated by sending
the new account JSON contents via a PUT to `/v1/ach-accounts/{accountId}`. The
updated ACH account is returned in the response.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X PUT --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/ach-accounts/Cn9j655rSem_QzRQXLsbhw -d'
{
    "type": "TEST",
    "name": "ACH Account Updated",
    "primary": "true",
    "currency": "CAD",
    "routing_number": "000000013",
    "account_number": "1234567891",
    "account_type": "CHECKING",
    "processor_auth_key": "testup",
    "processor_auth_pass": "testup",
    "credit_enabled": false,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "max_transaction_amount": 60000,
    "max_daily_transactions": 200,
    "max_daily_transaction_value": 2000000,
    "max_monthly_transactions": 4000,
    "max_monthly_transaction_value": 500000000,
    "warn_transaction_amount": 50000,
    "warn_daily_transactions": 150,
    "warn_daily_transaction_value": 1500000,
    "warn_monthly_transactions": 3000,
    "warn_monthly_transaction_value": 400000000,
    "required_payment_fields": "name",
    "transaction_allowed_countries": "CA"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "Cn9j655rSem_QzRQXLsbhw",
    "status": "ACTIVE",
    "type": "TEST",
    "processor_auth_key": "testup",
    "name": "ACH Account Updated",
    "primary": true,
    "currency": "CAD",
    "routing_number": "000000013",
    "account_number": "1234567891",
    "account_type": "CHECKING",
    "bank_name": "FIRST BANK OF TESTING",
    "credit_enabled": false,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "required_payment_fields": "name",
    "max_transaction_amount": 60000,
    "max_daily_transactions": 200,
    "max_daily_transaction_value": 2000000,
    "max_monthly_transactions": 4000,
    "max_monthly_transaction_value": 500000000,
    "warn_transaction_amount": 50000,
    "warn_daily_transactions": 150,
    "warn_daily_transaction_value": 1500000,
    "warn_monthly_transactions": 3000,
    "warn_monthly_transaction_value": 400000000,
    "max_credit_amount": 0,
    "max_daily_credits": 0,
    "max_daily_credit_value": 0,
    "max_monthly_credits": 0,
    "max_monthly_credit_value": 0,
    "warn_credit_amount": 0,
    "warn_daily_credits": 0,
    "warn_daily_credit_value": 0,
    "warn_monthly_credits": 0,
    "warn_monthly_credit_value": 0,
    "transaction_allowed_countries": "CA"
}</pre>
</div>
