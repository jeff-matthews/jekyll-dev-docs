<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A merchant bank account's parameters, used to interact with payment processors to move funds between the merchant's account and credit card accounts.</p>

      <table>
        <thead>
          <tr>
            <th>Parameter</th>
            <th>Type</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td><td>String</td><td>The ID of the entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>created</td><td>Timestamp</td><td>Date/time the entity was created <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>created_by</td><td>String</td><td>User or remote IP that created the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>modified</td><td>Timestamp</td><td>Date/time the entity was last modified <em>(read-only)</em></td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>modified_by</td><td>String</td><td>User or remote IP that last modified the entity <em>(read-only)</em></td>
          </tr>
          {% endif %}
          <tr>
            <td>messages</td><td>Array of Strings</td><td>Validation or warning messages associated with an operation requested on this entity <em>(read-only)</em></td>
          </tr>
          <tr>
            <td>trust_account</td><td>Boolean</td><td>Whether or not this is a trust account. If unknown, the property is not returned <em>(read-only).</em></td>
          </tr>
          <tr>
            <td>status</td><td>String</td>
            <td>Status of the Account <em>(read-only)</em>. Enumeration of:
              <ul>
                <li><b>ACTIVE</b> - The account is currently active.</li>
                <li><b>INACTIVE</b> - The account is no longer active.</li>
                <li><b>DELETED</b> - The account has been marked deleted.</li>
              </ul>
            </td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>type</td><td>String</td>
            <td>Type of the account <em>(set at creation of the Account, read-only thereafter)</em>. Enumeration of:
              <ul>
                <li><b>TEST</b> - A test account. Transactions using test accounts are not passed to payment processors.</li>
                <li><b>TSYS</b> - A merchant account provisioned by <a href="http://www.tsys.com/">TSYS</a>.</li>
              </ul>
            </td>
          </tr>
          {% endif %}
          <tr>
            <td>name</td><td>String</td><td>Descriptive name for the account, for display purposes only</td>
          </tr>
          <tr>
            <td>primary</td>
            <td>Boolean</td><td>Whether this Account is the
              Merchant's primary account. Exactly one Account must always be marked as primary. The primary Account is
              used for Charges that do not specify an account ID.
            </td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>bank_id</td><td>String</td><td>6-digit issuing bank ID</td>
          </tr>
          <tr>
            <td>account_number</td><td>String</td><td>Account number at the issuing bank</td>
          </tr>
          <tr>
            <td>agent_bank_number</td><td>String</td><td>Identity of the agent entity of the issuing bank or processor</td>
          </tr>
          <tr>
            <td>agent_chain_number</td><td>String</td><td>Identity of the chain within the agent organization, as indicated by the account provider</td>
          </tr>
          <tr>
            <td>terminal_id</td><td>String</td><td>Logical POS tracking identifier, as indicated by the account provider</td>
          </tr>
          <tr>
            <td>merchant_name</td><td>String</td><td>Name of the Merchant as it should appear on the customer's credit card transaction records</td>
          </tr>
          <tr>
            <td>category_code</td><td>String</td><td>4-digit code provided by the account provider or processor to classify the Merchant's business</td>
          </tr>
          <tr>
            <td>currency</td><td>String</td><td>3-letter ISO currency code identifying the currency used by the Merchant</td>
          </tr>
          <tr>
            <td>service_phone</td><td>String</td><td>10-digit phone number customers of the Merchant may call for service (US only)</td>
          </tr>
          <tr>
            <td>store_number</td><td>String</td><td>4-digit store number</td>
          </tr>
          <tr>
            <td>terminal_number</td><td>String</td><td>4-digit terminal number</td>
          </tr>
          <tr>
            <td>industry_type</td><td>String</td>
            <td>The industry type assigned to the type of business conducted via the merchant account. Enumeration of:
              <dl>
                <dt>DIRECT_MARKETING</dt>
                <dt>AUTO_RENTAL</dt>
                <dt>GROCERY</dt>
                <dt>HOTEL</dt>
                <dt>RESTAURANT</dt>
                <dt>RETAIL</dt>
              </dl>
            </td>
          </tr>
          <tr>
            <td>capture_time</td><td>String</td><td>Time of day in 24-hour HH:MM notation at which <code>auto-capture</code>
            of the account is performed by the Gateway. Minutes must be specified in 5-minute increments. This time is
            relative to capture_timezone.
          </tr>
          <tr>
            <td>capture_timezone</td><td>String</td><td>The timezone ID (e.g., "America/New_York") associated with the
            <code>capture_time</code> used to determine when auto-capture of the account is performed.</td>
          </tr>
          <tr>
            <td>credit_enabled</td><td>Boolean</td><td>Whether credits can be performed
            to move funds out of this account.</td>
          </tr>
          <tr>
            <td>nonoriginating_refund_enabled</td><td>Boolean</td>
            <td>Whether or not refund operations may be performed on Charges created via this Account specifying
            a payment method different than the Charge's original payment method</td>
          </tr>
          <tr>
            <td>recurring_charges_enabled</td><td>Boolean</td>
            <td>Whether or not recurring charges are enabled for this account.</td>
          </tr>
          <tr>
            <td>non_tokenized_payment_enabled</td><td>Boolean</td>
            <td>Whether or not transactions can be created using directly-provided payment details
              (as opposed to payment details provided via a token, such as a one-time token or saved
              card or bank). Enabling this policy implies the calling merchant meets the PCI requirements
              for safeguarding the transmission of sensitive payment details.</td>
          </tr>
          {% endif %}
          <tr>
            <td>currency</td>
            <td>String</td>
            <td>3-letter ISO currency code identifying the currency used by the Merchant</td>
          </tr>
          <tr>
            <td>accepted_card_types</td><td>String</td>
            <td>Comma-delimited list of zero or more card types accepted by the merchant. Transactions are rejected if a
              card number is provided which does not map to an accepted card type. Supported values are any
              <a href="#card" style="font-family:monospace">card</a>, as well as the special type <span class="code-green">&#42;</span> which indicates any card
              type is accepted.</td>
          </tr>
          <tr>
            <td>cvv_policy</td><td>String</td>
            <td>The CVV matching policy applied to non-swiped Charges made through the Account. Enumeration of:
              <ul>
                <li><b>DISABLED</b> - No CVV check is performed.</li>
                <li><b>OPTIONAL</b> - CVV is not required, but if CVV data is present on the transaction, CVV checks are performed on the payment processor. Matching requirements are the same as <span class="code-green">REQUIRE_MATCH_LENIENT</span>.</li>
                <li><b>REQUIRE_MATCH_LENIENT</b> - A CVV match is required, but transactions are permitted if CVV checks are not available on the payment processor or not applicable to the card.</li>
                <li><b>REQUIRE_MATCH_STRICT</b> - A CVV match is required. Transactions are rejected if CVV checks are not available on the payment processor or not applicable to the card.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>avs_policy</td><td>String</td>
            <td>The address verification policy applied to non-swiped Charges made through the Account. Enumeration of:
              <ul>
                <li><b>DISABLED</b> - No AVS check is performed.</li>
                <li><b>SUBMIT_IGNORE_RESULT</b> - An AVS check is performed on the address and postal code data, if available, and the result is stored on the Charge; however no action is taken based on the result (i.e., transactions are never rejected as a result of the AVS result).</li>
                <li><b>ADDR_OR_POSTAL_CODE_LENIENT</b> - A match of the address or postal code is required. Transactions are permitted if
                  AVS checks are not available on the payment processor or not applicable to the card.</li>
                <li><b>ADDR_OR_POSTAL_CODE_STRICT</b> - A match of the address or postal code is required. Transactions are rejected if
                  AVS checks are not available on the payment processor or not applicable to the card.</li>
                <li><b>ADDR_STRICT</b> - An exact match of the address is required.</li>
                <li><b>POSTAL_CODE_STRICT</b> - An exact match of the postal code is required.</li>
                <li><b>EXACT_ADDR_AND_POSTAL_CODE_LENIENT</b> - An exact match of both the address and postal code is required. Transactions are permitted if
                  AVS checks are not available on the payment processor or not applicable to the card.</li>
                <li><b>EXACT_ADDR_AND_POSTAL_CODE_STRICT</b> - An exact match of both the address and postal code is required. Transactions are rejected if AVS checks are not available on the payment processor or not applicable to the card.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>ignore_avs_failure_if_cvv_match</td><td>Boolean</td>
            <td>Whether an AVS failure on a non-swiped Charge should be ignored provided the CVV match was successful. Only
              applicable if <span class="code-green">cvv_policy</span> is not DISABLED.</td>
          </tr>
          <tr>
            <td>required_payment_fields</td><td>String</td>
            <td>Comma-delimited list of zero or more card field properties that are required to be present on non-swiped card
              details presented for Charges, Refunds{% if user == 'tenant' %}, Credits,{% endif %} and payment token
              generation. Card number, expiration month, and expiration year are always required for credit card payments. The
              following property names of <a href="#card" style="font-family:monospace">card</a>may be included in the list contents:
              <ul>
                <li>card_type</li>
                <li>cvv</li>
                <li>name</li>
                <li>address1</li>
                <li>city</li>
                <li>state</li>
                <li>postal_code</li>
                <li>country</li>
                <li>email</li>
                <li>phone</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>swipe_cvv_policy</td><td>String</td>
            <td>The CVV matching policy applied to retail swiped Charges made through the account. Available property values
              are identical to <span class="code-green">cvv_policy</span>.</td>
          </tr>
          <tr>
            <td>swipe_avs_policy</td><td>String</td>
            <td>The AVS matching policy applied to retail swiped Charges made through the account. Available property values
              are identical to <span class="code-green">avs_policy</span>.</td>
          </tr>
          <tr>
            <td>swipe_ignore_avs_failure_if_cvv_match</td><td>Boolean</td>
            <td>Whether an AVS failure on a swiped Charge should be ignored provided the CVV match was successful. Only
              applicable if <span class="code-green">swipe_cvv_policy</span> is not DISABLED.</td>
          </tr>
          <tr>
          <td>swipe_required_payment_fields</td><td>String</td>
          <td>Comma-delimited list of zero or more card field properties that are required to be present on swiped card
            details presented for Charges, Refunds{% if user == 'tenant' %}, Credits,{% endif %} and Payment Token generation.
            The set of supported values is identical to <span class="code-green">required_payment_fields</span>.</td>
          </tr>
          <tr>
            <td>transaction_allowed_countries</td>
            <td>String</td>
            <td>Comma-delimited list of zero or more 2-letter ISO 3166 country codes for which remote client IP addresses
              are accepted for transaction operations on this account. The country is determined by geographic IP lookup. Transaction operations includeCharge, Void, Capture{% if user == 'tenant' %}, Refund, and Credit{% else %} and Refund {% endif %}. If no countries are defined, the Merchant's Tenant may define a default list of countries.
              {% if user == 'merchant' %} <em>(read-only)</em>
              {% endif %}
            </td>
          </tr>
          {% if user == 'tenant' %}
          <tr>
            <td>max_transaction_amount</td><td>Number</td><td>The maximum amount of any single transaction permitted for the Account, over which
              Charges are rejected. This value is in terms of the base unit of the Account's currency (USD cents by default). The maximum value
              is 10^14 - 1. If set to any value less than 1, no limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_daily_transactions</td><td>Number</td><td>The maximum number of <a href="#charge">Charges</a> permitted for the Account during any
              24-hour period, after which further Charges are rejected with a limit exceeded error. The maximum value is 10^12 - 1. If set to any value
              less than 1, no daily limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_daily_transaction_value</td><td>Number</td><td>The maximum sum of all <a href="#charge">Charges</a> permitted for the Account during
              any 24-hour period, after which further Charges are rejected with a limit exceeded error. This value is in terms of the base unit of the
              Account's currency (USD cents by default). The maximum value is 10^14 - 1. If set to any value less than 1, no daily limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_monthly_transactions</td><td>Number</td><td>The maximum number of <a href="#charge">Charges</a> permitted for the Account during any
              30-day period, after which further Charges are rejected with a limit exceeded error. The maximum value is 10^12 - 1. If set to any value
              less than 1, no monthly limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_monthly_transaction_value</td><td>Number</td><td>The maximum sum of all <a href="#charge">Charges</a> permitted for the account during
              any 30-day period, after which further Charges are rejected with a limit exceeded error. This value is in terms of the base unit of the
              account's currency (USD cents by default). The maximum value is 10^14 - 1. If set to any value less than 1, no monthly limit is enforced.
            </td>
          </tr>
          <tr>
            <td>warn_transaction_amount</td><td>Number</td><td>A warning threshold for the amount of any single transaction, over which
              the Tenant is alerted. This value is in terms of the base unit of the Account's currency (USD cents by default). The
              maximum value is 10^14 - 1. If set to any value less than 1, no limit is enforced.
            </td>
          </tr>
          <tr>
            <td>warn_daily_transactions</td><td>Number</td><td>A warning threshold for the number of <a href="#charge">Charges</a>
              for the account during any 24-hour period, after which the Tenant is alerted. The maximum value is 10^12 - 1.
              If set to any value less than 1, no daily warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_daily_transaction_value</td><td>Number</td><td>A warning threshold for the sum of all <a href="#charge">Charges</a>
              for the account during any 24-hour period, after which further Charges cause an alert to be sent to the Tenant. This
              value is in terms of the base unit of the account's currency (USD cents by default). The maximum value is 10^14 - 1.
              If set to any value less than 1, no daily warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_monthly_transactions</td><td>Number</td><td>A warning threshold for the number of <a href="#charge">Charges</a>
              for the account during any 30-day period, after which the Tenant is alerted. The maximum value is 10^12 - 1.
              If set to any value less than 1, no monthly warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_monthly_transaction_value</td><td>Number</td><td>A warning threshold for the sum of all <a href="#charge">Charges</a>
              for the account during any 30-day period, after which further Charges cause an alert to be sent to the Tenant. This value
              is in terms of the base unit of the account's currency (USD cents by default). The maximum value is 10^14 - 1.
              If set to any value less than 1, no monthly warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>max_credit_amount</td><td>Number</td><td>The maximum amount of any single credit permitted for the Account, over which
              Credits are rejected. This value is in terms of the base unit of the Account's currency (USD cents by default). The maximum value
              is 10^14 - 1. If set to any value less than 1, no limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_daily_credits</td><td>Number</td><td>The maximum number of <a href="#credit">Credits</a> permitted for the Account during any
              24-hour period, after which further Credits are rejected with a limit exceeded error. The maximum value is 10^12 - 1. If set to any value
              less than 1, no daily limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_daily_credit_value</td><td>Number</td><td>The maximum sum of all <a href="#credit">Credits</a> permitted for the Account during
              any 24-hour period, after which further Credits are rejected with a limit exceeded error. This value is in terms of the base unit of the
              Account's currency (USD cents by default). The maximum value is 10^14 - 1. If set to any value less than 1, no daily limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_monthly_credits</td><td>Number</td><td>The maximum number of <a href="#credit">Credits</a> permitted for the Account during any
              30-day period, after which further Credits are rejected with a limit exceeded error. The maximum value is 10^12 - 1. If set to any value
              less than 1, no monthly limit is enforced.
            </td>
          </tr>
          <tr>
            <td>max_monthly_credit_value</td><td>Number</td><td>The maximum sum of all <a href="#credit">Credits</a> permitted for the account during
              any 30-day period, after which further Credits are rejected with a limit exceeded error. This value is in terms of the base unit of the
              account's currency (USD cents by default). The maximum value is 10^14 - 1. If set to any value less than 1, no monthly limit is enforced.
            </td>
          </tr>
          <tr>
            <td>warn_credit_amount</td><td>Number</td><td>A warning threshold for the amount of any single Credit, over which
              the Tenant is alerted. This value is in terms of the base unit of the Account's currency (USD cents by default). The
              maximum value is 10^14 - 1. If set to any value less than 1, no limit is enforced.
            </td>
          </tr>
          <tr>
            <td>warn_daily_credits</td><td>Number</td><td>A warning threshold for the number of <a href="#credit">Credits</a>
              for the account during any 24-hour period, after which the Tenant is alerted. The maximum value is 10^12 - 1.
              If set to any value less than 1, no daily warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_daily_credit_value</td><td>Number</td><td>A warning threshold for the sum of all <a href="#credit">Credits</a>
              for the account during any 24-hour period, after which further Credits cause an alert to be sent to the Tenant. This
              value is in terms of the base unit of the account's currency (USD cents by default). The maximum value is 10^14 - 1.
              If set to any value less than 1, no daily warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_monthly_credits</td><td>Number</td><td>A warning threshold for the number of <a href="#credit">Credits</a>
              for the account during any 30-day period, after which the Tenant is alerted. The maximum value is 10^12 - 1.
              If set to any value less than 1, no monthly warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>warn_monthly_credit_value</td><td>Number</td><td>A warning threshold for the sum of all <a href="#credit">Credits</a>
              for the account during any 30-day period, after which further Credits cause an alert to be sent to the Tenant. This value
              is in terms of the base unit of the account's currency (USD cents by default). The maximum value is 10^14 - 1.
              If set to any value less than 1, no monthly warning threshold is applied.
            </td>
          </tr>
          <tr>
            <td>foreign_max_transaction_amount</td><td>Number</td><td>The maximum amount of any single foreign transaction
              (defined as a transaction from outside the account's allowed transaction countries) permitted for the Account,
              over which such transactions are rejected. This value is in terms of the base unit of the Account's currency
              (USD cents by default). The maximum value is 10^14 - 1. If set to any value less than 1, no transactions from
              outside the account's allowed transaction countries are allowed. This property is provided to allow occasional
              exceptions to the allowed transaction countries to be permitted to be processed.</td>
          </tr>
          <tr>
            <td>foreign_max_monthly_transactions</td><td>Number</td><td>The maximum number of foreign transactions
              (defined as any transaction from outside the account's allowed transaction countries) permitted for the Account
              during any 30-day period, after which such transactions are rejected. The maximum value is 10^12 - 1. If set to
              any value less than 1, no transactions from outside the account's allowed transaction countries are allowed.
              This property is provided to allow occasional exceptions to the allowed transaction countries to be permitted to
              be processed.</td>
          </tr>
          <tr>
            <td>foreign_max_monthly_transaction_value</td><td>Number</td><td>The maximum sum of all foreign transactions
              (defined as any transaction from outside the account's allowed transaction countries) permitted for the Account
              during any 30-day period, after which such transactions are rejected. The maximum value is 10^14 - 1. If set to
              any value less than 1, no transactions from outside the account's allowed transaction countries are allowed.
              This property is provided to allow occasional exceptions to the allowed transaction countries to be permitted to
              be processed.</td>
          </tr>
          {% endif %}
        </tbody>
      </table>
    </div>
  </div>
</div>
