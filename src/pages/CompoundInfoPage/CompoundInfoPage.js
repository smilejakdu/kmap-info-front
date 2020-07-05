import React from "react";
import "./CompoundInfoPage.scss";
import Navigation from "../../components/Navigation/Navigation";
import CompoundInfo from "../../components/Compound/CompoundInfo";
import image from "./logo.png";
import request from "../../util/request";
import axios from "axios";

class CompoundInfoPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      result: [],
      compoundname: [],
    };
    this.cancel = "";
  }

  fetchSearchResults = (query) => {
    const searchUrl = `/compound/search?query=${query}`;

    if (this.cancel) {
      this.cancel.cancel();
    }
    this.cancel = axios.CancelToken.source();
    request
      .get(searchUrl, {
        cancelToken: this.cancel.token,
      })
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log("fetch : ", data);
        this.setState({
          result: data,
        });
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log("error : ", error);
        }
      });
  };

  searchDataClick = (search_data) => {
    console.log("searchDataClick 들어옴 : ", search_data);
    return request
      .get(`/compound/search/${search_data}`)
      .then((res) => {
        let {
          data: { data },
        } = res;
        console.log(data);
        this.setState({
          compoundname: data,
        });
      })
      .catch((error) => {
        error && console.warn(error);
      });
  };

  renderSearchResults = () => {
    const { result } = this.state;
    console.log("renderSearchResults :", result);
    if (Object.keys(result).length && result.length) {
      console.log("renderSearchResults 통과 ");
      return (
        <div className="test_div">
          {result.map((res) => {
            return (
              <h6
                className="search_font"
                onClick={() => this.searchDataClick(res.compound)}
              >
                {res.compound}
              </h6>
            );
          })}
        </div>
      );
    }
  };

  handleOnInputChange = (event) => {
    const query = event.target.value;
    console.log("handleOnInputChange : ", query);
    if (!query) {
      this.setState({ query, result: [] });
    } else {
      this.setState({ query }, () => {
        this.fetchSearchResults(query);
      });
    }
  };

  render() {
    const { query } = this.state;
    console.log("this.state.result", this.state.result);
    return (
      <>
        <div className="nav">
          <Navigation />
        </div>
        <div>
          <div className="kai_logo">
            <img src={"/kmapinfo" + image} width="250" height="100" />
            {/* <img src={image} width="250" height="100" /> */}
          </div>
        </div>
        <div className="div_border">
          <div>
            <input
              type="text"
              value={query}
              placeholder="검색"
              className="search_input"
              onChange={this.handleOnInputChange}
            />
          </div>
          <div>{this.renderSearchResults()}</div>
          <CompoundInfo data={this.state.compoundname} />
        </div>
      </>
    );
  }
}

export default CompoundInfoPage;
