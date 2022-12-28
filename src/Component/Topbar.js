import UserView from "./UserView";

function Topbar() {
  return (
    <div>
      <nav>
        <ul>
          <li>Hướng dẫn sử dụng</li>
          <li>Quy tắc</li>
        </ul>
        <div className="userView">
          <UserView></UserView>
        </div>
      </nav>
    </div>
  );
}

export default Topbar;
