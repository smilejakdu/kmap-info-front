import React from "react";
import PropTypes from "prop-types";
import "./Pagination.css";
import "bootstrap/dist/css/bootstrap.min.css";

const propTypes = {
  items: PropTypes.array.isRequired,
  onChangePage: PropTypes.func.isRequired,
  initialPage: PropTypes.number,
  pageSize: PropTypes.number,
};

const defaultProps = {
  initialPage: 1,
  pageSize: 10,
};

class Pagination extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pager: {} };
  }

  componentWillMount() {
    if (this.props.items && this.props.items.length) {
      this.setPage(this.props.initialPage);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.items !== prevProps.items) {
      this.setPage(this.props.initialPage);
    }
  }

  setPage(page) {
    var { items, pageSize } = this.props;
    var pager = this.state.pager;

    if (page < 1 || page > pager.totalPages) {
      return;
    }

    pager = this.getPager(items.length, page, pageSize);
    var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
    this.setState({ pager: pager });
    this.props.onChangePage(pageOfItems);
  }

  getPager(totalItems, currentPage, pageSize) {
    currentPage = currentPage || 1;
    pageSize = pageSize || 5;
    var totalPages = Math.ceil(totalItems / pageSize);

    var startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 5) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage >= totalPages) {
        startPage = totalPages - 5;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage;
      }
    }

    var startIndex = (currentPage - 1) * pageSize;
    var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
    var pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    return {
      totalItems: totalItems,
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };
  }

  render() {
    var pager = this.state.pager;

    if (!pager.pages || pager.pages.length <= 1) {
      return null;
    }

    return (
      <ul className="pagination">
        <li className={pager.currentPage === 1 ? "disabled" : ""}>
          <a onClick={() => this.setPage(1)}>처음</a>
        </li>
        <li className={pager.currentPage === 1 ? "disabled" : ""}>
          <a onClick={() => this.setPage(pager.currentPage - 1)}>이전</a>
        </li>
        {pager.pages.map((page, index) => (
          <li
            key={index}
            className={pager.currentPage === page ? "active" : ""}
          >
            <a onClick={() => this.setPage(page)}>{page}</a>
          </li>
        ))}
        <li
          className={pager.currentPage === pager.totalPages ? "disabled" : ""}
        >
          <a onClick={() => this.setPage(pager.currentPage + 1)}>다음</a>
        </li>
        <li
          className={pager.currentPage === pager.totalPages ? "disabled" : ""}
        >
          <a onClick={() => this.setPage(pager.totalPages)}>끝</a>
        </li>
      </ul>
    );
  }
}

Pagination.propTypes = propTypes;
Pagination.defaultProps = defaultProps;
export default Pagination;
