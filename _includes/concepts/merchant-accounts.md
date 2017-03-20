Every AffiniPay merchant profile contains at least one merchant or ACH account that receives payment from credit card and ACH transactions. Some AffiniPay merchants have more than one account. When more than one account is associated with a merchant profile, it's important that each transaction applies to the appropriate account.

API requests that don't specify an <span class="code-green">account_id</span> apply to the _primary_ merchant or ACH account, depending on transaction type, by default. You can change the primary status of a <a href="../reference/api.html#UpdateMerchantAccount" target="&#95;blank">merchant</a> or <a href="../reference/api.html#UpdateACHAccount" target="&#95;blank">ACH</a> account through the API or by contacting <a href="https://affinipay.com/support/" target="&#95;blank">support</a>.

We recommend explicitly setting the <span class="code-green">account_id</span> in all API requests to ensure that the appropriate account receives payment.

<span class="panel-note"><b>Note:</b> Each account has a separate set of [test- and live-mode credentials](../basics/account-management.html#test-live-creds).</span>
