export default function DashboardPage() {
  return (
    <div>
      <h1 className="mb-4">Admin Dashboard</h1>

      <div className="row">
        <div className="col-md-4 mb-3">
          <div className="card text-white bg-primary">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">120 registered users</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-success">
            <div className="card-body">
              <h5 className="card-title">Orders</h5>
              <p className="card-text">85 new orders</p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mb-3">
          <div className="card text-white bg-warning">
            <div className="card-body">
              <h5 className="card-title">Revenue</h5>
              <p className="card-text">$12,400 this month</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
