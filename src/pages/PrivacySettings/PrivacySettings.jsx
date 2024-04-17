export default function PrivacySettings() {
  return (
    <>
      <div className="d-flex container">
        <div className="col-6 container">
          <div className="row">
            <ul className="nav nav-tabs">
              <li className="nav-item mt-4">
                <div className="tab-content container">
                  <div className="form-check mt-2 ps-3">
                    <input
                      className="form-check-input border-dark bg-dark rounded-0 dark-background"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Show your profile to logged-in users
                    </label>
                  </div>
                  <div className="form-check ps-3">
                    <input
                      className="form-check-input border-dark bg-dark rounded-0"
                      type="checkbox"
                      value=""
                      id="flexCheckChecked"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckChecked"
                    >
                      Show courses you&apos;re taking on your profile page
                    </label>
                  </div>
                </div>
                <div
                  className="btn text-light rounded-0 fs-5 fw-bold mb-3 ms-3 mt-4 pb-2 pe-4 ps-4 pt-2"
                  style={{ backgroundColor: '#1c1d1f' }}
                >
                  Save
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6 container">
          <div className="row"></div>
        </div>
      </div>
    </>
  );
}
