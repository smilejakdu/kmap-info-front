import Pagination from "../components/Pagination";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class PaginationPage extends React.Component {
  constructor() {
    super();

    // an example array of 150 items to be paged
    var exampleItems = [...Array(2).keys()].map((i) => ({
      id: i + 1,
      name: "Item " + (i + 1),
    }));

    this.state = {
      exampleItems: exampleItems,
      pageOfItems: [],
    };

    this.onChangePage = this.onChangePage.bind(this);
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems: pageOfItems });
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h1>React - Pagination Example with logic like Google</h1>
            {this.state.pageOfItems.map((item) => (
              <div key={item.id}>이름 : {item.name}</div>
            ))}
            {console.log(this.state.exampleItems)}
            <Pagination
              items={this.state.exampleItems}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
        <hr />
        <div className="credits text-center"></div>
      </div>
    );
  }
}

export default PaginationPage;
