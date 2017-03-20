Update Merchant Account
-----------------------

    PUT /v1/accounts/{accountId}

An existing [Merchant Account](types#merchantaccount-section) is updated by sending
the new account JSON contents via a PUT to `/v1/accounts/{accountId}`. The
updated account is returned in the response.

<div class="http-example http-request-example">
  <pre class="prettyprint">
curl -X PUT --user username:password -H "Content-Type:application/json" {{site.data.variables.apiurl.gateway}}/v1/accounts/wKgBZTynEtOBPKgGmXAAAA -d'
{
    "type": "TEST",
    "name": "New Enterprise Updated",
    "primary": "false",
    "bank_id": "123457",
    "account_number": "993459238399",
    "agent_bank_number": "001122",
    "agent_chain_number": "112234",
    "terminal_id": "20000001",
    "merchant_name": "Biz1 Enterprises",
    "category_code": "5144",
    "currency": "USD",
    "service_phone": "9876543210",
    "store_number": "0001",
    "terminal_number": "0001",
    "industry_type": "DIRECT_MARKETING",
    "credit_enabled": false,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "max_transaction_amount": 40000,
    "max_daily_transactions": 100,
    "max_daily_transaction_value": 1000000,
    "max_monthly_transactions": 0,
    "max_monthly_transaction_value": 0,
    "warn_transaction_amount": 30000,
    "warn_daily_transactions": 85,
    "warn_daily_transaction_value": 0,
    "warn_monthly_transactions": 1500,
    "warn_monthly_transaction_value": 1500000,
    "required_payment_fields": "name,address1,city,state,postal_code,cvv",
    "cvv_policy": "REQUIRE_MATCH_LENIENT",
    "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
    "ignore_avs_failure_if_cvv_match": false,
    "transaction_allowed_countries": "US"
}'</pre>
</div>

<div class="http-example http-response-example">
  <pre class="prettyprint">
{
    "id": "wKgBZTynEtOBPKgGmXAAAA",
    "status": "ACTIVE",
    "type": "TEST",
    "name": "New Enterprise Updated",
    "primary": false,
    "bank_id": "123457",
    "account_number": "993459238399",
    "agent_bank_number": "001122",
    "agent_chain_number": "112234",
    "terminal_id": "20000001",
    "merchant_name": "Biz1 Enterprises",
    "category_code": "5144",
    "currency": "USD",
    "service_phone": "9876543210",
    "store_number": "0001",
    "terminal_number": "0001",
    "industry_type": "DIRECT_MARKETING",
    "credit_enabled": false,
    "nonoriginating_refund_enabled": true,
    "recurring_charges_enabled": true,
    "max_transaction_amount": 40000,
    "max_daily_transactions": 100,
    "max_daily_transaction_value": 1000000,
    "max_monthly_transactions": 0,
    "max_monthly_transaction_value": 0,
    "warn_transaction_amount": 30000,
    "warn_daily_transactions": 85,
    "warn_daily_transaction_value": 0,
    "warn_monthly_transactions": 1500,
    "warn_monthly_transaction_value": 1500000,
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
    "required_payment_fields": "name,address1,city,state,postal_code,cvv",
    "cvv_policy": "REQUIRE_MATCH_LENIENT",
    "avs_policy": "ADDR_OR_POSTAL_CODE_LENIENT",
    "ignore_avs_failure_if_cvv_match": false,
    "transaction_allowed_countries": "US"
}</pre>
</div>
