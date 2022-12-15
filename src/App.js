import "./App.css";
import {treeData} from "./components/TreeData";
import Tree from "./components/Tree";
import FamilyData from "./components/FamilyData";
import Form from "./components/Form";
import formJSON from '../src/components/Data.json'
import AddFamilyMember from "./components/AddFamilyMember";
import { useState } from "react";


function App() {
  const [selectedMember, setSelectedMember] = useState({})

  const handleSelectedMemberChange = (data)=>{
    setSelectedMember(data)
  }

  return (
    <div className="App">
      <div className="web-body">
        <div className="familyTree">
          Family tree
          <div className="familyTreeDetails">
              <input type="search" name="" id="" />
              <Tree handleSelectedMemberChange={handleSelectedMemberChange} data={formJSON} />
           
          </div>
          <div className="buttons">
            <div>
              <button> Import JSON</button>
              <button onClick={AddFamilyMember}>Add Family</button>
            </div>
            <div>
              <button>Export JSON</button>
              <button>Print Family Tree</button>
            </div>
          </div>
        </div>
        <div className="familyDetails">
          Family Details
        <FamilyData   data={selectedMember} />
        {/* <Form/> */}
          </div>
      </div>
    </div>
  );
}

export default App;
