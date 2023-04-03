import ClientBar from '../navbar/navbar';
import './profile.css';
import ClientHeader from '../home/header';

export default function ClientProfile() {
  return (
    <section id='client-cont'>
      <ClientBar />
      <section id='client-profile'>
        <ClientHeader message='Update your organisations details.' />

        <section id='client-profile-1'>
          <h3>Update general details</h3>
          <form id='client-profile-1-1'>
            <span>
              <section>
                <label>Organisation's name</label>
                <input type='text' placeholder='Organisations name' />
              </section>
              <section>
                <label>Organisation's Number</label>
                <input type='text' placeholder='Organisations number' />
              </section>
              <section>
                <label>Organisation's Incorporation</label>
                <input
                  type='text'
                  placeholder='Organisations incoporation date'
                />
              </section>
              <section>
                <label>Organisation's Description</label>
                <input
                  type='text'
                  placeholder='Organisations brief description'
                />
              </section>
              <section>
                <label for='org-type'>Select organization type:</label>
                <select id='org-type' name='org-type'>
                  <option value='sole-proprietorship'>
                    Sole Proprietorship
                  </option>
                  <option value='partnership'>Partnership</option>
                  <option value='corporation'>Corporation</option>
                  <option value='limited-liability-company'>
                    Limited Liability Company (LLC)
                  </option>
                  <option value='nonprofit-organization'>
                    Nonprofit Organization
                  </option>
                  <option value='cooperative'>Cooperative</option>
                  <option value='franchise'>Franchise</option>
                  <option value='joint-venture'>Joint Venture</option>
                  <option value='government-agency'>Government Agency</option>
                  <option value='international-organization'>
                    International Organization
                  </option>
                </select>
              </section>
            </span>

            <button type='submit'>Update</button>
          </form>

          <form>
            <h3>Financial details</h3>
            <span>
              <section>
                <label>KRA Pin.</label>
                <input type='text' placeholder='KRA pin' />
              </section>
              <section>
                <label>NSSF Member No.</label>
                <input type='text' placeholder='NSSF number' />
              </section>
              <section>
                <label>NHIF Member No.</label>
                <input type='text' placeholder='NHIF number' />
              </section>
              <section>
                <label>Bank Name</label>
                <input type='text' placeholder='Bank name' />
              </section>
              <section>
                <label>Bank Branch</label>
                <input type='text' placeholder='Bank branch' />
              </section>
              <section>
                <label>Bank Acc. No.</label>
                <input type='text' placeholder='Bank account number' />
              </section>
            </span>
            <button type='submit'>Update details</button>
          </form>

          <form>
            <h3>Salaries and Renumerations</h3>
            <span>
              <div id='salary-selection-div'>
                <label>Set payment range for permanent employees.</label>
                <select>
                  <option value='one-week'>One week</option>
                  <option value='two-week'>Two weeks</option>
                  <option value='one-month'>One month</option>
                </select>
              </div>
            </span>
            <button type='submit'>Update details</button>
          </form>
          
        </section>
      </section>
    </section>
  );
}
