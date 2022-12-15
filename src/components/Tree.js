import React, { useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import "./tree.css";
import { TreeNode } from "./TreeNode";

const Tree = (props) => {
  console.log(props)
  return (
    <div className="detailsContainer">
      <ul className="details ">
        {props.data.map((tree) => (
          <TreeNode handleSelectedMemberChange={props.handleSelectedMemberChange}  key={tree.key} node={tree} />
        ))}
      </ul>
  </div>
  );
};




export default Tree;
