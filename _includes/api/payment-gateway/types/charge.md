<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
		<p>A credit card charge.</p>

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
						<td>id</td>
						<td>String</td>
						<td>The ID of the entity <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>created</td>
						<td>Timestamp</td>
						<td>Date/time the entity was created <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>modified</td>
						<td>Timestamp</td>
						<td>Date/time the entity was last modified <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>messages</td>
						<td>Array of Strings</td>
						<td>Validation or warning messages associated with an operation requested on this entity <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>type</td>
						<td>String</td>
						<td>Type of the transaction, used to differentiate Charges{% if user == 'tenant' %}, Refunds, and Credits{% else %} and Refunds{% endif %} in transaction search results. For
						Charges, the value is always <span class="code-green">CHARGE</span>. <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>account_id</td>
						<td>String</td>
						<td>The ID of the account to receive payment from the Charge <em>(set at creation of the Charge, read-only thereafter)</em></td>
					</tr>
					<tr>
						<td>status</td>
						<td>String</td>
						<td>
							Status of the transaction <em>(read-only)</em>. Enumeration of:
							<ul>
								<li><b>PENDING</b> - The Gateway is awaiting confirmation from the processor of the transaction's creation.</li>
								<li><b>AUTHORIZED</b> - The transaction has been authorized.</li>
								<li><b>COMPLETED</b> - The Gateway has completed processing the transaction. Depending on the configuration and type of underlying Merchant or ACH Account, settlement is
								either in process or complete.</li>
								<li><b>VOIDED</b> - The transaction has been voided.</li>
								<li><b>FAILED</b> - The transaction failed. Consult the failure code for details.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>failure_code</td>
						<td>String</td>
						<td>
							Failure code indicating the reason a transaction's status was marked FAILED. The defined failure codes are the error message codes listed in <a href=
							"#gateway-messages-and-errors">Messages and Errors</a>.
						</td>
					</tr>
					<tr>
						<td>amount</td>
						<td>Number</td>
						<td>The amount to charge, in terms of the currency's smallest unit. For USD, this is the amount in cents. The maximum value is 10^14 - 1.</td>
					</tr>
					<tr>
						<td>currency</td>
						<td>String</td>
						<td>3-letter ISO 4217 code representing the currency in which the amount is denominated <em>(optional, defaults to USD)</em></td>
					</tr>
					<tr>
						<td>method</td>
						<td>Payment method or ID</td>
						<td>
							Details of the <a href="#card" style="font-family:monospace">card</a> or <a href="#bank" style="font-family:monospace">bank</a> to be charged. The contents of the payment details must be specified as a JSON hash or the String ID of a
							saved payment method or one-time token must be specified. When returned in a response, sensitive card details are either omitted (CVV) or masked (card number).
						</td>
					</tr>
					<tr>
						<td>data</td>
						<td>JSON hash</td>
						<td>A JSON hash containing any additional data to be included on the transaction. Storage charges may apply based on the amount of data saved.</td>
					</tr>
					<tr>
						<td>auto_capture</td>
						<td>Boolean</td>
						<td>Whether the Charge will be automatically captured by the Gateway (if <span class="code-green">true</span>) or the merchant must manually capture the transaction (if
						<span class="code-green">&gt;false</span>, an "authorization-only" request to place a hold on funds). If not specified, the Gateway defaults to <span class=
						"code-green">&gt;true</span> and automatically captures the charge.</td>
					</tr>
					<tr>
						<td>amount_refunded</td>
						<td>Number</td>
						<td>The total amount refunded from the authorized amount</td>
					</tr>
					<tr>
						<td>authorization_code</td>
						<td>String</td>
						<td>The authorization code provided by the payment processor following a successful authorization <em>(read-only)</em></td>
					</tr>					
					<tr>
						<td>cvv_result</td>
						<td>String</td>
						<td>
							CVV result from authorization of the Charge, if any <em>(read-only)</em>. Enumeration of:
							<ul>
								<li><b>MATCHED</b> - CVV matched</li>
								<li><b>NOT_MATCHED</b> - No match for CVV</li>
								<li><b>ERROR</b> - Unrecognized or unknown response</li>
								<li><b>INVALID</b> - Invalid response received from CVV check</li>
								<li><b>NOT_PROCESSED</b> - CVV could not be processed by issuer</li>
								<li><b>NOT_PRESENT_ON_CARD</b> - Issuer indicates no CVV present</li>
								<li><b>UNAVAILABLE</b> - CVV check is unavailable</li>
								<li><b>NO_RESPONSE</b> - No response from CVV check</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>avs_result</td>
						<td>String</td>
						<td>
							AVS result from authorization of the Charge, if any <em>(read-only)</em>. Enumeration of:
							<ul>
								<li><b>ADDRESS</b> - Address matches (AVS code "A")</li>
								<li><b>ADDRESS_INTL</b> - Address matches (international, AVS code "B")</li>
								<li><b>NO_MATCH_INTL</b> - No match on address or postal code (international, AVS code "C")</li>
								<li><b>EXACT_MATCH_INTL</b> - Exact match on address and postal code (international, AVS code "D")</li>
								<li><b>AVS_ERROR_INELIGIBLE</b> - AVS error or not eligible (AVS code "E")</li>
								<li><b>EXACT_MATCH_UK</b> - Exact match on address and postal code (UK-specific, AVS code "F")</li>
								<li><b>NOT_SUPPORTED_INTL</b> - AVS not supported by non-US issuer (AVS code "G")</li>
								<li><b>UNAVAILABLE_INTL</b> - AVS unavailable (international, AVS code "I")</li>
								<li><b>ADDRESS_AND_POSTAL_CODE</b> - Exact match of address and postal code (AVS code "M")</li>
								<li><b>NO_MATCH</b> - No match on address or postal code (AVS code "N")</li>
								<li><b>POSTAL_CODE</b> - Match on postal code (international, AVS code "P")</li>
								<li><b>RETRY</b> - AVS service not currently available from issuer (AVS code "R")</li>
								<li><b>NOT_SUPPORTED</b> - AVS not supported by US issuer (AVS code "S")</li>
								<li><b>UNAVAILABLE</b> - AVS unavailable (AVS code "U")</li>
								<li><b>ZIP9</b> - Match on 9-digit US zip code (AVS code "W")</li>
								<li><b>ADDRESS_AND_ZIP9</b> - Exact match of address and 9-digit US zip code (AVS code "X")</li>
								<li><b>ADDRESS_AND_ZIP5</b> - Exact match of address and 5-digit US zip code (AVS code "Y")</li>
								<li><b>ZIP5</b> - Match on 5-digit US zip code (AVS code "Z")</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>reference</td>
						<td>String</td>
						<td>An optional reference provided by the Merchant when creating the Charge. This field is not used by the Gateway, but may be used by Merchant systems for correlation with
						invoices, etc. Maximum length is 128 characters.</td>
					</tr>
					<tr>
						<td>capture_reference</td>
						<td>String</td>
						<td>An optional reference provided by the Merchant when manually capturing the Charge. Note that this property may only be set for transactions with auto_capture set to
						<span class="code-green">true</span>. Maximum length is 128 characters.</td>
					</tr>
					<tr>
						<td>void_reference</td>
						<td>String</td>
						<td>An optional reference provided by the Merchant when voiding the transaction. Maximum length is 128 characters.</td>
					</tr>
					<tr>
						<td>recurring_charge_id</td>
						<td>String</td>
						<td>The ID of the RecurringCharge instance if the transaction was performed in the context of a recurring payment <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>recurring_charge_
		        occurrence_id</td>
						<td>String</td>
						<td>The ID of the associated occurrence of the recurring payment, if any. This property is only set if recurring_charge_id is defined. <em>(Read-only)</em></td>
					</tr>
					<tr>
						<td>refunds</td>
						<td>
							Array of <a href="#refund" style="font-family:monospace">refunds</a>
						</td>
						<td>Subsequent refunds applied to the Charge <em>(read-only)</em></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
