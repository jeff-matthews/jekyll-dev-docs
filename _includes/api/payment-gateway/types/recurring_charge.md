<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
			<p>A recurring charge that automatically attempts to collect payment on a defined schedule.</p>

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
							<td>status</td>
							<td>String</td>
							<td>
								Status of the recurring charge <em>(read-only)</em>. Enumeration of:
								<ul>
									<li><b>ACTIVE</b> - The recurring charge has future scheduled payments to collect.</li>
									<li><b>COMPLETED</b> - Collection has been attempted on all scheduled payments for the recurring charge.</li>
									<li><b>DELETED</b> - The recurring charge has been deleted.</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>status_reason</td>
							<td>String</td>
							<td>
								Reason code indicating why the recurring charge transitioned to the current status <em>(read-only)</em>. Enumeration of:
								<ul>
									<li><b>schedule_complete</b> - Recurring charge completed normally, having attempted all scheduled payments.</li>
									<li><b>user_canceled</b> - The Merchant canceled the recurring charge.</li>
								</ul>
							</td>
						</tr>
						<tr>
							<td>account_id</td>
							<td>String</td>
							<td>The ID of the account to receive payment from the recurring charge <em>(set at creation of the recurring charge, read-only thereafter)</em></td>
						</tr>
						<tr>
							<td>method</td>
							<td>Payment method or ID</td>
							<td>
								Details of the <a href="#card" style="font-family:monospace">card</a> or <a href="#bank" style="font-family:monospace">bank</a> to be charged. The contents of the payment details must be specified as a JSON hash or the string ID of a
								saved payment method or one-time token must be specified. When returned in a response, sensitive card details are either omitted (CVV) or masked (card number).
							</td>
						</tr>
						<tr>
							<td>schedule</td>
							<td>
								<a href="#schedule-object">Schedule</a>
							</td>
							<td>The schedule indicating when payments are due. Upon creation or update of a recurring charge, the Gateway calculates the next payment using the given schedule along with
							the configured start date and current date. For start dates occurring before the current date, the next payment is defined as the next eligible date (based on the schedule) on
							or after the current date.</td>
						</tr>
						<tr>
							<td>description</td>
							<td>String</td>
							<td>Description for the recurring charge <em>(optional)</em></td>
						</tr>
						<tr>
							<td>amount</td>
							<td>Number</td>
							<td>The amount to charge on each scheduled payment, in terms of the currency's smallest unit. For USD, this is the amount in cents. The maximum value is 10^14 - 1.</td>
						</tr>
						<tr>
							<td>currency</td>
							<td>String</td>
							<td>3-letter ISO 4217 code representing the currency in which the amount is denominated <em>(optional, defaults to USD)</em></td>
						</tr>
						<tr>
							<td>reference</td>
							<td>String</td>
							<td>An optional reference to be set on each Charge created to collect a scheduled payment associated with this recurring charge <em>(optional)</em></td>
						</tr>
						<tr>
							<td>max_occurrences</td>
							<td>Number</td>
							<td>
								The maximum number of scheduled payments that will be attempted before the recurring charge is automatically marked completed. Note that maximum occurrences tracks scheduled
								payments, and not actual transactions created to collect on those scheduled payments.
								<p>For example, a Charge associated with an occurrence may initially fail if the credit card associated with the recurring charge is declined or expired; however, after the
								payment details are updated, a subsequent Charge associated with the same occurrence may succeed. In this scenario, however, only a single occurrence is counted towards the
								<span class="code-green">max_occurrences</span> limit.</p>
							</td>
						</tr>
						<tr>
							<td>max_amount</td>
							<td>Number</td>
							<td>
								The maximum amount the recurring charge will attempt to collect before the recurring charge is automatically marked completed. This value must be greater than or equal to
								<span class="code-green">amount</span>. The final occurrence of a recurring charge will be the lesser of <span class="code-green">amount</span> and the remainder of
								<span class="code-green">max_amount</span> less <span class="code-green">total_amount</span>.
								<p>For example, a recurring charge with a scheduled amount of $100 and a maximum amount of $150 will result in an initial occurrence for $100 followed by a final occurrence
								of $50. Note that <span class="code-green">max_amount</span>, just like <span class="code-green">max_occurrences</span>, tracks scheduled payments, and not actual
								transactions created to collect on those scheduled payments.</p>
							</td>
						</tr>
						<tr>
							<td>total_occurrences</td>
							<td>Number</td>
							<td>The total number of occurrences for this recurring charge for which the Gateway has attempted to collect payment. This value does not include the next pending occurrence,
							if any. <em>(Read-only)</em></td>
						</tr>
						<tr>
							<td>total_amount</td>
							<td>Number</td>
							<td>The total amount for which the Gateway has attempted to collect payment for this recurring charge. This value does not include the amount for the next pending occurrence,
							if any. <em>(Read-only)</em></td>
						</tr>
						<tr>
							<td>next_payment</td>
							<td>
								Date
							</td>
							<td>The date the Gateway will attempt to collect the next payment, if any scheduled payments remain.</td>
						</tr>
						<tr>
							<td>data</td>
							<td>JSON hash</td>
							<td>A JSON hash containing any additional data to be included on each charge created to collect a scheduled payment. Storage charges may apply based on the amount of data
							saved.</td>
						</tr>
						<tr>
							<td>occurrences</td>
							<td>
								Array of <a href="#recurring_charge_occurrence" style="font-family:monospace">recurring_charge_occurrences</a>
							</td>
							<td>The recurring charge's occurrences, in order of increasing payment date. Occurrences are only returned following creation as a convenience to provide initial occurrence
							information<em>(read-only)</em></td>
						</tr>
					</tbody>
				</table>
		</div>
	</div>
</div>
