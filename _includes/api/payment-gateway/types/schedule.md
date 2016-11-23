<div class="method-area">
  <div class="method-copy">
    <div class="method-copy-padding">
      <p>A schedule defining the occurrence of events, such as recurring charge payments.</p>

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
            <td>interval_unit</td>
            <td>String</td>
            <td>The interval unit of the schedule. Enumeration of:
              <ul>
                <li><b>DAY</b> - Scheduled payments are performed every n <b>days</b>, based on the <span class="code-green">interval_delay</span>.</li>
                <li><b>WEEK</b> - Scheduled payments are performed every n <b>weeks</b>, based on the <span class="code-green">interval_delay</span>.</li>
                <li><b>MONTH</b> - Scheduled payments are performed every n <b>months</b>, based on the <span class="code-green">interval_delay</span>.</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>interval_delay</td>
            <td>Number</td>
            <td>The frequency with which the schedule is executed, in terms of the <span class="code-green">interval_unit</span>. <p>For example, if the interval unit is DAY, an interval delay of 1 means the schedule is executed every day; an interval delay of 2 means execution every other day; and an interval delay of 30 would mean the schedule is executed every 30 days.</p></td>
          </tr>
          <tr>
            <td>start</td>
            <td>Date</td>
            <td>The start date for the schedule such that the first occurrence may be executed on or after this date</td>
          </tr>
          <tr>
            <td>end</td>
            <td>Date</td>
            <td>The end date for the schedule such that the last occurrence is executed on or before this date <em>(optional)</em></td>
          </tr>
          <tr>
            <td>days</td>
            <td>Array of String</td>
            <td>Schedules for specific days of the week or month are created by defining the <span class="code-green">days</span> property. This property can only be used with an <span class="code-green">interval_unit</span> of <span class="code-green">WEEK</span> or <span class="code-green">MONTH</span> and an <span class="code-green">interval_delay</span> of 1.
            <p>For weekly schedules, the values of this property are the ISO numeric days of the week: "1" for Monday, "2" for Tuesday, through "6" for Saturday and "7" for Sunday. For example, a schedule to be executed Mondays and Fridays would specify an array containing the values "1" and "5".</p>
            <p>For monthly schedules, the values of this property are the days of the month, starting from "1", on which the schedule is executed. The keyword <span class="code-green">LAST</span> can be used to indicate the last day of the month. For example, a schedule to be executed on the 15th and last days of each month would specify an array containing the values "15" and "LAST".</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
