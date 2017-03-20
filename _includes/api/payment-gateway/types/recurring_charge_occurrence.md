<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
		<p>An occurrence of a recurring charge. Occurrences track individual scheduled payments as defined by the schedule of
		the owning <a href="#recurring_charge" style="font-family:monospace">recurring_charge</a>.</p>

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
						<td>recurring_charge_id</td>
						<td>String</td>
						<td>ID of the owning recurring charge <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>amount</td>
						<td>Number</td>
						<td>The amount, in terms of the base unit of the owning recurring charge account's currency, to be collected by this occurrence <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>status</td>
						<td>String</td>
						<td>
							The status of the occurrence <em>(read-only)</em>. Enumeration of:
							<ul>
								<li><b>PENDING</b> - No attempt has yet been made to collect the payment for this occurrence. This is the initial state of all occurrences.</li>
								<li><b>PAYING</b> - The Gateway is currently authorizing a Charge to collect payment for this occurrence.</li>
								<li><b>PAID</b> - Payment was collected successfully for the occurrence.</li>
								<li><b>IGNORED</b> - No further attempts will be made to collect payment for this occurrence.</li>
								<li><b>FAILED</b> - The attempt to collect payment for this occurrence failed. The Merchant may manually attempt to collect the payment (for example, after waiting for available funds from the client or updating the recurring charge with new payment details) or mark the occurrence as ignored.</li>
							</ul>
						</td>
					</tr>
					<tr>
						<td>due_date</td>
						<td>Date</td>
						<td>The date the Gateway will attempt to collect payment for the occurrence <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>attempts</td>
						<td>Number</td>
						<td>The number of attempts made to collect payment on this occurrence <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>last_attempt</td>
						<td>Timestamp</td>
						<td>The last time an attempt was made to collect payment for this occurrence <em>(read-only)</em></td>
					</tr>
					<tr>
						<td>transactions</td>
						<td>
							Array of <a href="#charge" style="font-family:monospace">charges</a>
						</td>
						<td>The transactions which have attempted to collect payment for this occurrence, in order of increasing creation timestamp <em>(read-only)</em></td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
