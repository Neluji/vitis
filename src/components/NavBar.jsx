import React from "react";

function NavBtn({ id, children }) {
  return (
    <button
      id={id + "Btn"}
      className="rounded-full bg-orange-400 w-12 h-12 my-2"
    >
      <span className="relative">
        <span className="block absolute w-[calc(100%+1rem)] -left-2 h-1/3 top-1/3 bg-red-500"></span>
        <span className="relative">{children}</span>
      </span>
    </button>
  );
}

class NavBar extends React.Component {
  render() {
    const groups = this.props.groups.map((val) => {
      return (
        <NavBtn key={val} id={val}>
          {val}
        </NavBtn>
      );
    });

    return (
      <div className="fixed h-screen w-20 bg-lime-400 flex flex-row flex-wrap content-between justify-around py-2">
        <div className="topBtns w-min">
          <NavBtn id="home">H</NavBtn>
          {groups}
        </div>
        <div className="bottomBtns w-min">
          <NavBtn id="settings">S</NavBtn>
          <NavBtn id="profile">P</NavBtn>
        </div>
      </div>
    );
  }
}

export default NavBar;
