import React from "react";
import { useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import Tree from "./Tree";

export const TreeNode = ({ node, handleSelectedMemberChange }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.children ? true : false;

  const member = () => {
    setChildVisiblity((v) => !v);
    const selectedNode = { node }.node;
    console.log(selectedNode);
    handleSelectedMemberChange(selectedNode);
  };

  return (
    <div>
      <li className="listStyles ">
        <div className="d-flex selector" onClick={member}>
          {hasChild && (
            <div
              className={`inactive d-tree-toggler ${
                childVisible ? "active" : ""
              }`}>
              <RxCaretRight />
            </div>
          )}

          <div className="head">{node.relation}</div>
        </div>

        {hasChild && childVisible && (
          <div className="d-tree-content">
            <ul className="d-flex d-tree-container flex-column">
              <Tree key={node.key} data={node.children} />
            </ul>
          </div>
        )}
      </li>
    </div>
  );
};
