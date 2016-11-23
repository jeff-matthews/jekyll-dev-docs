---
layout: api-ref
title: API Reference
permalink: /reference/api.html
---

<h1 class="top"> Authentication API</h1>

## Overview
{% include api/authentication/overview.md %}

## Access Tokens

### Request an Access Token
{% include api/authentication/request_access_token.md %}

## Gateway Credentials

### Request Gateway Credentials
{% include api/authentication/request_gateway_credentials.md %}

# Merchant Application API {#merchant-application-api}

## Overview
{% include api/merchant-application/overview.md %}

## Create a New Application
{% include api/merchant-application/create_merchant_application.md %}

## Deauthorize an OAuth Application

{% include api/merchant-application/deauthorize_oauth_application.md %}

## Object Types
{% include api/merchant-application/types/overview.md %}

### merchant_application
{% include api/merchant-application/types/merchant_application.md %}

<h2 id="merchant-application-messages-and-errors">Messages and Errors</h2>
{% include api/merchant-application/errors/invalid_data.md %}

## Webhooks {#webhooks-merchant-app}
{% include api/merchant-application/webhooks/overview.md %}

### Configure Webhooks
{% include api/merchant-application/webhooks/configuring_webhooks.md %}

#### Specify an Event URL
{% include api/merchant-application/webhooks/specify_event_url.md %}

#### Configure Your Server
{% include api/merchant-application/webhooks/configure_your_server.md %}

### Event Types
{% include api/merchant-application/webhooks/event_types.md %}

#### merchant.provisioned
{% include api/merchant-application/webhooks/merchant_provisioned.md %}

#### merchant_application.declined
{% include api/merchant-application/webhooks/merchant_application_declined.md %}

# Payment Gateway API {#payment-gateway-api}

## Overview
{% include api/payment-gateway/front-matter/overview.md %}

### Security
{% include api/payment-gateway/front-matter/security.md %}

#### Test vs Live Mode
{% include api/payment-gateway/front-matter/test_vs_live_mode.md %}

#### Restricting Client Access
{% include api/payment-gateway/front-matter/restricting_client_access.md %}

### Responses and Errors
{% include api/payment-gateway/front-matter/responses_and_errors.md %}

### Testing
{% include api/payment-gateway/front-matter/testing.md %}

#### Test Card Numbers
{% include api/payment-gateway/front-matter/test_card_numbers.md %}

#### Test Bank Account Numbers
{% include api/payment-gateway/front-matter/test_bank_account_numbers.md %}

### System Status
{% include api/payment-gateway/front-matter/system_status.md %}

## Merchant Management
{% include api/payment-gateway/merchant_management.md %}

### Get Current Merchant
{% include api/payment-gateway/current_merchant.md %}

### Update Merchant
{% include api/payment-gateway/update_merchant.md %}

### Update Merchant Account
{% include api/payment-gateway/update_merchant_account.md %}

### Update ACH Account
{% include api/payment-gateway/update_ach_account.md %}

### Purge Test Data
{% include api/payment-gateway/purge_test_data.md %}

## Transactions
{% include api/payment-gateway/transaction_apis.md %}

### Charges
{% include api/payment-gateway/charge.md %}

#### Charge with Recurrence
{% include api/payment-gateway/charge_with_schedule.md %}

#### Capture
{% include api/payment-gateway/capture.md %}

### Refunds
{% include api/payment-gateway/refund.md %}

### Voids
{% include api/payment-gateway/void.md %}

### Get Transaction by ID
{% include api/payment-gateway/get_transaction.md %}

### Search Transactions
{% include api/payment-gateway/search_transactions.md %}

## Recurring Charges
{% include api/payment-gateway/recurring_apis.md %}

### Create Recurring Charge
{% include api/payment-gateway/create_recurring_charge.md %}

### Get Recurring Charge
{% include api/payment-gateway/get_recurring_charge.md %}

### Update Recurring Charge
{% include api/payment-gateway/update_recurring_charge.md %}

### Cancel Recurring Charge
{% include api/payment-gateway/cancel_recurring_charge.md %}

### Delete Recurring Charge
{% include api/payment-gateway/delete_recurring_charge.md %}

### List Recurring Charges
{% include api/payment-gateway/get_recurring_charges.md %}

### Get Occurrence
{% include api/payment-gateway/get_recurring_charge_occurrence.md %}

### Pay Occurrence
{% include api/payment-gateway/pay_recurring_charge_occurrence.md %}

### Ignore Occurrence
{% include api/payment-gateway/ignore_recurring_charge_occurrence.md %}

### List Occurrences
{% include api/payment-gateway/get_recurring_charge_occurrences.md %}

## Payment Methods
{% include api/payment-gateway/payment_methods.md %}

### Saved Cards
{% include api/payment-gateway/saved_cards.md %}

#### Store a Card
{% include api/payment-gateway/create_saved_card.md %}

#### Get a Card
{% include api/payment-gateway/get_saved_card.md %}

#### Delete a Card
{% include api/payment-gateway/delete_saved_card.md %}

#### List Cards
{% include api/payment-gateway/get_saved_cards.md %}

### Saved Banks
{% include api/payment-gateway/saved_banks.md %}

#### Store a Bank
{% include api/payment-gateway/create_saved_bank.md %}

#### Get a Bank
{% include api/payment-gateway/get_saved_bank.md %}

#### Delete a Bank
{% include api/payment-gateway/delete_saved_bank.md %}

#### List Banks
{% include api/payment-gateway/get_saved_banks.md %}

### One-Time Tokens
{% include api/payment-gateway/payment_tokens.md %}

#### Create a Token
{% include api/payment-gateway/create_payment_token.md %}

#### Get a Token
{% include api/payment-gateway/get_payment_token.md %}

## Events
{% include api/payment-gateway/events.md %}

### Get Event by ID
{% include api/payment-gateway/get_event.md %}

### List Events
{% include api/payment-gateway/get_events.md %}

## Object Types
{% include api/payment-gateway/types/overview.md %}

### ach_account
{% include api/payment-gateway/types/ach_account.md %}

### bank
{% include api/payment-gateway/types/bank_details.md %}

### card
{% include api/payment-gateway/types/card_details.md %}

### charge
{% include api/payment-gateway/types/charge.md %}

### event
{% include api/payment-gateway/types/event.md %}

### merchant
{% include api/payment-gateway/types/merchant.md %}

### merchant_account
{% include api/payment-gateway/types/merchant_account.md %}

### recurring_charge
{% include api/payment-gateway/types/recurring_charge.md %}

### recurring_charge_occurrence
{% include api/payment-gateway/types/recurring_charge_occurrence.md %}

### refund
{% include api/payment-gateway/types/refund.md %}

### schedule
{% include api/payment-gateway/types/schedule.md %}

### search_results
{% include api/payment-gateway/types/search_results.md %}

### token
{% include api/payment-gateway/types/token.md %}

<h2 id="gateway-messages-and-errors">Messages and Errors</h2>

{% include api/payment-gateway/errors/overview.md %}

### General Messages
{% include api/payment-gateway/errors/general/general.md %}

#### not\_authorized
{% include api/payment-gateway/errors/general/not_authorized.md %}

#### not\_authorized\_country\_denied
{% include api/payment-gateway/errors/general/not_authorized_country_denied.md %}

#### malformed\_request
{% include api/payment-gateway/errors/general/malformed_request.md %}

#### invalid\_request
{% include api/payment-gateway/errors/general/invalid_request.md %}

#### no\_content
{% include api/payment-gateway/errors/general/no_content.md %}

#### invalid\_data
{% include api/payment-gateway/errors/general/invalid_data.md %}

#### invalid\_data\_encryption
{% include api/payment-gateway/errors/general/invalid_data_encryption.md %}

#### resource\_not\_found
{% include api/payment-gateway/errors/general/resource_not_found.md %}

#### unavailable\_for\_current\_status
{% include api/payment-gateway/errors/general/unavailable_for_current_status.md %}

#### no\_account\_specified
{% include api/payment-gateway/errors/general/no_account_specified.md %}

#### merchant\_not\_active
{% include api/payment-gateway/errors/general/merchant_not_active.md %}

#### unavailable\_for\_merchant\_status
{% include api/payment-gateway/errors/general/unavailable_for_merchant_status.md %}

#### account\_not\_active
{% include api/payment-gateway/errors/general/account_not_active.md %}

#### unavailable\_for\_merchant\_mode
{% include api/payment-gateway/errors/general/unavailable_for_merchant_mode.md %}

#### unavailable\_for\_merchant\_policy
{% include api/payment-gateway/errors/general/unavailable_for_merchant_policy.md %}

#### no\_payment\_method
{% include api/payment-gateway/errors/general/no_payment_method.md %}

#### no\_account\_for\_payment_method
{% include api/payment-gateway/errors/general/no_account_for_payment_method.md %}

#### incorrect\_payment\_type
{% include api/payment-gateway/errors/general/incorrect_payment_type.md %}

#### payment\_method\_expired
{% include api/payment-gateway/errors/general/payment_method_expired.md %}

#### search_failed
{% include api/payment-gateway/errors/general/search_failed.md %}

#### server_error
{% include api/payment-gateway/errors/general/servor_error.md %}

#### version_conflict
{% include api/payment-gateway/errors/general/version_conflict.md %}

### Card Validation Messages
{% include api/payment-gateway/errors/card-validation/card_validation.md %}

#### card_number_invalid
{% include api/payment-gateway/errors/card-validation/card_number_invalid.md %}

#### card\_number\_incorrect
{% include api/payment-gateway/errors/card-validation/card_number_incorrect.md %}

#### card_expired
{% include api/payment-gateway/errors/card-validation/card_expired.md %}

#### card\_cvv\_incorrect
{% include api/payment-gateway/errors/card-validation/card_cvv_incorrect.md %}

#### card\_avs\_rejected
{% include api/payment-gateway/errors/card-validation/card_avs_rejected.md %}

### Card Processing Messages
{% include api/payment-gateway/errors/card-processing/card_processing.md %}

#### no\_card\_details\_or\_token\_present
{% include api/payment-gateway/errors/card-processing/no_card_details_or_token_present.md %}

#### not\_valid\_for\_transaction\_status
{% include api/payment-gateway/errors/card-processing/not_valid_for_transaction_status.md %}

#### unavailable\_due\_to\_capture\_in\_process
{% include api/payment-gateway/errors/card-processing/unavailable_due_to_capture_in_process.md %}

#### exceeds\_authorized\_amount
{% include api/payment-gateway/errors/card-processing/exceeds_authorized_amount.md %}

#### refund\_exceeds\_transaction
{% include api/payment-gateway/errors/card-processing/refund_exceeds_transaction.md %}

#### currency_mismatch
{% include api/payment-gateway/errors/card-processing/currency_mismatch.md %}

#### unsupported_currency
{% include api/payment-gateway/errors/card-processing/unsupported_currency.md %}

#### card_declined
{% include api/payment-gateway/errors/card-processing/card_declined.md %}

#### card\_declined\_processing\_error
{% include api/payment-gateway/errors/card-processing/card_declined_processing_error.md %}

#### card\_declined\_insufficient\_funds
{% include api/payment-gateway/errors/card-processing/card_declined_insufficient_funds.md %}

#### card\_declined\_limit\_exceeded
{% include api/payment-gateway/errors/card-processing/card_declined_limit_exceeded.md %}

#### card\_declined\_refer\_to\_issuer
{% include api/payment-gateway/errors/card-processing/card_declined_refer_to_issuer.md %}

#### card\_declined\_hold
{% include api/payment-gateway/errors/card-processing/card_declined_hold.md %}

#### card\_declined\_no\_account
{% include api/payment-gateway/errors/card-processing/card_declined_no_account.md %}

#### card\_type\_not\_accepted
{% include api/payment-gateway/errors/card-processing/card_type_not_accepted.md %}

#### merchant\_trans\_max\_amount\_exceeded
{% include api/payment-gateway/errors/card-processing/merchant_trans_max_amount_exceeded.md %}

#### merchant\_trans\_daily\_count\_exceeded
{% include api/payment-gateway/errors/card-processing/merchant_trans_daily_count_exceeded.md %}

#### merchant\_trans\_daily\_amount\_exceeded
{% include api/payment-gateway/errors/card-processing/merchant_trans_daily_amount_exceeded.md %}

#### merchant\_trans\_monthly\_count\_exceeded
{% include api/payment-gateway/errors/card-processing/merchant_trans_monthly_count_exceeded.md %}

#### merchant\_trans\_monthly\_amount\_exceeded
{% include api/payment-gateway/errors/card-processing/merchant_trans_monthly_amount_exceeded.md %}

#### card\_processor\_not\_available
{% include api/payment-gateway/errors/card-processing/card_processor_not_available.md %}

#### card\_processing\_error
{% include api/payment-gateway/errors/card-processing/card_processing_error.md %}

#### settlement_failed
{% include api/payment-gateway/errors/card-processing/settlement_failed.md %}

### ACH Processing Messages
{% include api/payment-gateway/errors/ach-processing/ach.md %}

#### no\_bank\_details\_or\_token\_present
{% include api/payment-gateway/errors/ach-processing/no_bank_details_or_token_present.md %}

#### ach_declined
{% include api/payment-gateway/errors/ach-processing/ach_declined.md %}

#### ach\_declined\_hold
{% include api/payment-gateway/errors/ach-processing/ach_declined_hold.md %}

#### ach\_declined\_duplicate
{% include api/payment-gateway/errors/ach-processing/ach_declined_duplicate.md %}

#### ach\_invalid\_account\_number
{% include api/payment-gateway/errors/ach-processing/ach_invalid_account_number.md %}

#### ach\_invalid\_routing\_number
{% include api/payment-gateway/errors/ach-processing/ach_invalid_routing_number.md %}

#### ach\_insufficient\_funds
{% include api/payment-gateway/errors/ach-processing/ach_insufficient_funds.md %}

#### ach\_account\_not\_found
{% include api/payment-gateway/errors/ach-processing/ach_account_not_found.md %}

#### ach\_account\_closed
{% include api/payment-gateway/errors/ach-processing/ach_account_closed.md %}

#### ach\_account\_frozen
{% include api/payment-gateway/errors/ach-processing/ach_account_frozen.md %}

#### ach\_not\_authorized
{% include api/payment-gateway/errors/ach-processing/ach_not_authorized.md %}

#### ach\_authorization\_revoked
{% include api/payment-gateway/errors/ach-processing/ach_authorization_revoked.md %}

#### ach\_payment\_stopped
{% include api/payment-gateway/errors/ach-processing/ach_payment_stopped.md %}

#### ach\_payment\_refused
{% include api/payment-gateway/errors/ach-processing/ach_payment_refused.md %}

#### ach\_limit\_exceeded
{% include api/payment-gateway/errors/ach-processing/ach_limit_exceeded.md %}

#### ach\_deferred\_refund\_rejected\_charge\_failed
{% include api/payment-gateway/errors/ach-processing/ach_deferred_refund_rejected_charge_failed.md %}

#### ach\_invalid\_merchant\_configuration
{% include api/payment-gateway/errors/ach-processing/ach_invalid_merchant_configuration.md %}

#### ach\_processor\_not\_available
{% include api/payment-gateway/errors/ach-processing/ach_processor_not_available.md %}

#### ach\_processing\_error
{% include api/payment-gateway/errors/ach-processing/ach_processing_error.md %}

### Recurring Charge Messages
{% include api/payment-gateway/errors/recurring-charges/recurring_charges.md %}

#### no\_occurrences\_for\_schedule
{% include api/payment-gateway/errors/recurring-charges/no_occurrences_for_schedule.md %}

#### first\_occurrence\_due\_immediately
{% include api/payment-gateway/errors/recurring-charges/first_occurrence_due_immediately.md %}

#### update\_results\_in\_no\_occurrences
{% include api/payment-gateway/errors/recurring-charges/update_results_in_no_occurrences.md %}

## Webhooks
{% include api/payment-gateway/webhooks/overview.md %}

### Configuring Webhooks
{% include api/payment-gateway/webhooks/configuring_webhooks.md %}

### Receiving Events
{% include api/payment-gateway/webhooks/receiving_events.md %}

### Event Types
{% include api/payment-gateway/webhooks/event-types/overview.md %}

#### transaction.authorized
{% include api/payment-gateway/webhooks/event-types/transaction.authorized.md %}

#### transaction.completed
{% include api/payment-gateway/webhooks/event-types/transaction.completed.md %}

#### transaction.voided
{% include api/payment-gateway/webhooks/event-types/transaction.voided.md %}

#### transaction.failed
{% include api/payment-gateway/webhooks/event-types/transaction.failed.md %}

#### transaction.updated
{% include api/payment-gateway/webhooks/event-types/transaction.updated.md %}

#### transaction.pending\_parent\_settlement
{% include api/payment-gateway/webhooks/event-types/transaction.pending_parent_settlement.md %}

#### payment_method.expiring
{% include api/payment-gateway/webhooks/event-types/payment_method.expiring.md %}

#### payment_method.expired
{% include api/payment-gateway/webhooks/event-types/payment_method.expired.md %}

#### recurring_charge.created
{% include api/payment-gateway/webhooks/event-types/recurring_charge.created.md %}

#### recurring_charge.updated
{% include api/payment-gateway/webhooks/event-types/recurring_charge.updated.md %}

#### recurring_charge.deleted
{% include api/payment-gateway/webhooks/event-types/recurring_charge.deleted.md %}

#### recurring_charge.completed
{% include api/payment-gateway/webhooks/event-types/recurring_charge.completed.md %}

#### recurring\_charge.payment\_method.expiring
{% include api/payment-gateway/webhooks/event-types/recurring_charge.payment_method.expiring.md %}

#### recurring\_charge.payment\_method.expired
{% include api/payment-gateway/webhooks/event-types/recurring_charge.payment_method.expired.md %}

#### recurring_charge.occurrence.created
{% include api/payment-gateway/webhooks/event-types/recurring_charge.occurrence.created.md %}

#### recurring_charge.occurrence.updated
{% include api/payment-gateway/webhooks/event-types/recurring_charge.occurrence.updated.md %}

#### recurring_charge.occurrence.paid
{% include api/payment-gateway/webhooks/event-types/recurring_charge.occurrence.paid.md %}

#### recurring_charge.occurrence.failed
{% include api/payment-gateway/webhooks/event-types/recurring_charge.occurrence.failed.md %}

#### recurring_charge.occurrence.ignored
{% include api/payment-gateway/webhooks/event-types/recurring_charge.occurrence.ignored.md %}
