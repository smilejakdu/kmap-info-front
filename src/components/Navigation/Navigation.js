import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <div>
      <div className="sidenav">
        <div className="kmap_nav_title">KMAP</div>
        <Link className="link" to="/kmapinfo/statistics">
          Statistics
        </Link>
        <Link className="link" to="/kmapinfo/">
          업로드
        </Link>
        <Link className="link" to="/kmapinfo/excelinfo">
          데이터 조회
        </Link>
        <Link className="link" to="/kmapinfo/compoundinfo">
          CompoundInfo
        </Link>
      </div>
    </div>
  );
};

export default withRouter(Navigation);
