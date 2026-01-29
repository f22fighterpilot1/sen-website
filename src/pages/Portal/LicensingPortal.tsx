import { NavLink } from "react-router-dom";
import { useMemo, useState } from "react";

type Customer = { id: string; name: string };
type NavSection = "entitlements" | "activations" | "settings" | "messages";

type Entitlement = {
  entitlement: string;
  licenseModel: string;
  count: number;
  startDate: string;
  expirationDate: string;
  remainingDays: number;
  totalActivated: number;
};

type Activation = {
  server: string;
  diskSerial: string;
  activated: number;
  startDate: string;
  expirationDate: string;
  remainingDays: number;
};

type ContactRow = { email: string; role: "Administrator" | "Viewer" };

export default function LicensingPortal() {
  const customers: Customer[] = useMemo(
    () => [
      { id: "00000006", name: "CompanyXYZ" },
      { id: "10101010", name: "Demo Company" },
    ],
    []
  );

  const [customerId, setCustomerId] = useState(customers[0].id);
  const [section, setSection] = useState<NavSection>("entitlements");

  const entitlements: Entitlement[] = useMemo(
    () => [
      {
        entitlement: "SEN Perception Core — Shared",
        licenseModel: "Shared",
        count: 10,
        startDate: "2026-01-01",
        expirationDate: "2027-01-01",
        remainingDays: 340,
        totalActivated: 3,
      },
      {
        entitlement: "SEN Verification Add-on — Named User",
        licenseModel: "Named User",
        count: 25,
        startDate: "2026-01-01",
        expirationDate: "2027-01-01",
        remainingDays: 340,
        totalActivated: 11,
      },
    ],
    []
  );

  const activations: Activation[] = useMemo(
    () => [
      {
        server: "sen-license-01",
        diskSerial: "DISK_SERIAL_NUM=abcd4321",
        activated: 4,
        startDate: "2026-01-01",
        expirationDate: "2027-01-01",
        remainingDays: 340,
      },
      {
        server: "sen-license-02",
        diskSerial: "DISK_SERIAL_NUM=dcab3214",
        activated: 2,
        startDate: "2026-01-01",
        expirationDate: "2027-01-01",
        remainingDays: 340,
      },
    ],
    []
  );

  const [contacts, setContacts] = useState<ContactRow[]>([
    { email: "admin@companyxyz.com", role: "Administrator" },
    { email: "user1@companyxyz.com", role: "Viewer" },
    { email: "user2@companyxyz.com", role: "Viewer" },
  ]);
  const [newEmail, setNewEmail] = useState("");

  const customerLabel = useMemo(() => {
    const c = customers.find((x) => x.id === customerId) ?? customers[0];
    return `${c.id} (${c.name})`;
  }, [customerId, customers]);

  const breadcrumb = useMemo(() => {
    if (section === "entitlements") return "Entitlements › Leases/Perpetuals";
    if (section === "activations") return "Activations › Manage Activations";
    if (section === "settings") return "Settings › Licensing Portal Access";
    return "Messages › Alerts";
  }, [section]);

  return (
    <div className="portal" data-portal="licensing">
      {/* Top bar */}
      <div className="portal-top">
        <div className="portal-top-inner">
  {/* LEFT: Brand */}
  <div className="portal-brand">
<div className="portal-brand">
  <div className="portal-brand-mark" aria-hidden />
  <NavLink to="/" className="portal-brand-title">
    SymbolicEngine
  </NavLink>
</div>
  </div>

  {/* CENTER: Title */}
  <div className="portal-title">
    Licensing Portal
  </div>

  {/* RIGHT: Customer */}
  <div className="portal-customer">
    <div className="portal-customer-label">
      SymbolicEngine Customer Number (Customer Name)
    </div>
    <div className="portal-customer-select">
      <select
        value={customerId}
        onChange={(e) => setCustomerId(e.target.value)}
        aria-label="Customer selector"
      >
        {customers.map((c) => (
          <option key={c.id} value={c.id}>
            SymbolicEngine {c.id} ({c.name})
          </option>
        ))}
      </select>
    </div>
  </div>

  {/* ICONS */}
  <div className="portal-top-actions" aria-hidden="true">
    <span className="portal-icon" title="Help">?</span>
    <span className="portal-icon" title="Account">👤</span>
  </div>
</div>


      </div>

      {/* Shell */}
      <div className="portal-shell">
        {/* Sidebar */}
        <aside className="portal-side" aria-label="Licensing portal navigation">
          <div className="portal-side-group">
            <div className="portal-side-head">Entitlements</div>
            <button
              type="button"
              className={`portal-side-link ${
                section === "entitlements" ? "is-active" : ""
              }`}
              onClick={() => setSection("entitlements")}
            >
              Leases / Perpetuals
            </button>
            <button
              type="button"
              className="portal-side-link"
              onClick={() => setSection("entitlements")}
            >
              Elastic Licensing
            </button>
          </div>

          <div className="portal-side-group">
            <div className="portal-side-head">Activations</div>
            <button
              type="button"
              className={`portal-side-link ${
                section === "activations" ? "is-active" : ""
              }`}
              onClick={() => setSection("activations")}
            >
              Activate Entitlements
            </button>
            <button
              type="button"
              className="portal-side-link"
              onClick={() => setSection("activations")}
            >
              Manage Activations
            </button>
          </div>

          <div className="portal-side-group">
            <div className="portal-side-head">Settings</div>
            <button
              type="button"
              className={`portal-side-link ${
                section === "settings" ? "is-active" : ""
              }`}
              onClick={() => setSection("settings")}
            >
              Licensing Portal Access
            </button>
            <button
              type="button"
              className="portal-side-link"
              onClick={() => setSection("settings")}
            >
              Elastic Credentials
            </button>
          </div>

          <div className="portal-side-group">
            <div className="portal-side-head">Messages</div>
            <button
              type="button"
              className={`portal-side-link ${
                section === "messages" ? "is-active" : ""
              }`}
              onClick={() => setSection("messages")}
            >
              Emails
            </button>
            <button
              type="button"
              className="portal-side-link"
              onClick={() => setSection("messages")}
            >
              Alerts
            </button>
          </div>

          <div className="portal-side-foot">
            <div className="portal-side-footline">
              © {new Date().getFullYear()} SymbolicEngine
            </div>
            <div className="portal-side-footline">{customerLabel}</div>
          </div>
        </aside>

        {/* Main */}
        <main className="portal-main">
          <div className="portal-breadcrumb">
            <span className="portal-crumb">{breadcrumb}</span>
          </div>

          {/* ENTITLEMENTS */}
          {section === "entitlements" && (
            <div className="portal-content">
              <div className="portal-card">
                <div className="portal-card-head">
                  <div className="portal-card-title">Active Entitlements</div>
                  <div className="portal-card-meta">Customer: {customerLabel}</div>
                </div>

                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Entitlement</th>
                        <th>License Model</th>
                        <th className="t-num">Count</th>
                        <th>Start Date</th>
                        <th>Expiration Date</th>
                        <th className="t-num">Remaining Days</th>
                        <th className="t-num">Total Activated</th>
                      </tr>
                    </thead>
                    <tbody>
                      {entitlements.map((e) => (
                        <tr key={e.entitlement}>
                          <td className="t-strong">{e.entitlement}</td>
                          <td>{e.licenseModel}</td>
                          <td className="t-num">{e.count}</td>
                          <td>{e.startDate}</td>
                          <td>{e.expirationDate}</td>
                          <td className="t-num">
                            <span className="portal-pill">{e.remainingDays}</span>
                          </td>
                          <td className="t-num">{e.totalActivated}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="portal-card portal-card--subtle">
                <div className="portal-card-head">
                  <div className="portal-card-title">Inactive Entitlements</div>
                </div>
                <div className="portal-empty">
                  Account does not have any inactive entitlements.
                </div>
              </div>
            </div>
          )}

          {/* ACTIVATIONS */}
          {section === "activations" && (
            <div className="portal-content">
              <div className="portal-card">
                <div className="portal-card-head">
                  <div className="portal-card-title">Active Servers</div>
                  <div className="portal-card-actions">
                    <button type="button" className="btn">
                      Download
                    </button>
                    <button type="button" className="btn btn-primary">
                      Check In All
                    </button>
                  </div>
                </div>

                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Hostname</th>
                        <th>Identifier</th>
                        <th className="t-num">Activated</th>
                        <th>Start Date</th>
                        <th>Expiration Date</th>
                        <th className="t-num">Remaining Days</th>
                        <th className="t-actions">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activations.map((a) => (
                        <tr key={a.server}>
                          <td className="t-strong">{a.server}</td>
                          <td className="t-mono">{a.diskSerial}</td>
                          <td className="t-num">{a.activated}</td>
                          <td>{a.startDate}</td>
                          <td>{a.expirationDate}</td>
                          <td className="t-num">
                            <span className="portal-pill">{a.remainingDays}</span>
                          </td>
                          <td className="t-actions">
                            <button type="button" className="portal-action" title="View">
                              👁
                            </button>
                            <button
                              type="button"
                              className="portal-action"
                              title="Download"
                            >
                              ⬇
                            </button>
                            <button type="button" className="portal-action" title="Check In">
                              ↩
                            </button>
                            <button
                              type="button"
                              className="portal-action danger"
                              title="Remove"
                            >
                              ✕
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="portal-card portal-card--subtle">
                <div className="portal-card-head">
                  <div className="portal-card-title">Inactive Servers</div>
                </div>
                <div className="portal-empty">No inactive servers.</div>
              </div>
            </div>
          )}

          {/* SETTINGS */}
          {section === "settings" && (
            <div className="portal-content">
              <div className="portal-card">
                <div className="portal-card-head">
                  <div className="portal-card-title">Licensing Portal Access</div>
                  <div className="portal-card-actions">
                    <button type="button" className="btn">
                      Cancel
                    </button>
                    <button type="button" className="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>

                <p className="portal-note">
                  Enter contacts below and assign Administrator or Viewer roles.
                  All contacts must have an active SEN account.
                </p>

                <div className="portal-row">
                  <div className="portal-field">
                    <label className="portal-label" htmlFor="portalEmail">
                      Add contact
                    </label>
                    <div className="portal-inputRow">
                      <input
                        id="portalEmail"
                        className="portal-input"
                        placeholder="user@domain.com"
                        value={newEmail}
                        onChange={(e) => setNewEmail(e.target.value)}
                      />
                      <button
                        type="button"
                        className="btn"
                        onClick={() => {
                          const email = newEmail.trim();
                          if (!email) return;
                          setContacts((prev) => [...prev, { email, role: "Viewer" }]);
                          setNewEmail("");
                        }}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                </div>

                <div className="portal-table-wrap">
                  <table className="portal-table">
                    <thead>
                      <tr>
                        <th>Contact</th>
                        <th>Role</th>
                        <th className="t-actions"> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contacts.map((c) => (
                        <tr key={c.email}>
                          <td className="t-mono">{c.email}</td>
                          <td>
                            <select
                              className="portal-select"
                              value={c.role}
                              onChange={(e) => {
                                const role = e.target.value as ContactRow["role"];
                                setContacts((prev) =>
                                  prev.map((x) =>
                                    x.email === c.email ? { ...x, role } : x
                                  )
                                );
                              }}
                            >
                              <option value="Administrator">
                                Licensing Portal Administrator
                              </option>
                              <option value="Viewer">Licensing Portal Viewer</option>
                            </select>
                          </td>
                          <td className="t-actions">
                            <button
                              type="button"
                              className="btn"
                              onClick={() =>
                                setContacts((prev) =>
                                  prev.filter((x) => x.email !== c.email)
                                )
                              }
                            >
                              Remove
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* MESSAGES */}
          {section === "messages" && (
            <div className="portal-content">
              <div className="portal-card">
                <div className="portal-card-head">
                  <div className="portal-card-title">Alerts</div>
                </div>

                <div className="portal-empty">
                  No alerts right now. (In production this would show license
                  expirations, activation failures, etc.)
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
