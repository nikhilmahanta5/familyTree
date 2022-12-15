import React, { useState } from "react";

function Form() {
  const [formFeilds, setFormFields] = useState([
    {
      key: "",
      name: "",
      relation: "",
      spouse: "",
      location: "",
      birthyear: "",
      address: "",
      familyPhoto: "",
      children: "",
    },
  ]);

  const handleFormChange =(e,i) =>{
        let data=[...formFeilds];
        data[i][e.target.name] = e.target.value;
        setFormFields(data)
  }

  const submit = () =>{
    console.log(formFeilds)
  }

  return (
    <div className="details">
        <form onSubmit={submit}>
        {formFeilds.map((form, i) => {
        return (
          <div key={i}>
            <h5>
              Name: <input type="text" name="name" id="" onChange={(e)=>handleFormChange(e,i)}
              value={form.name} />
            </h5>
            <h5>
              
              Spouse: <input type="text" name="spouse" id="" onChange={(e)=>handleFormChange(e,i)} 
              value={form.spouse}/>
              
            </h5>
            <h5>
              Location: <input type="text" name="location" id="" onChange={(e)=>handleFormChange(e,i)} value={form.location}/>
            </h5>
            <h5>
              Birth Year: <input type="text" name="birthyear" id="" onChange={(e)=>handleFormChange(e,i)}value={form.birthyear}/>
            </h5>
            <h5>
              
              Present Address: <input type="text" name="address" id="" onChange={(e)=>handleFormChange(e,i)}value={form.address}/>
            </h5>
            <h5>
              Family Photo: <input type="image" src="" alt="" onChange={(e)=>handleFormChange(e,i)}value={form.url1}/>
              <input type="image" src="" alt="" onChange={(e)=>handleFormChange(e,i)}value={form.url2}/>
            </h5>
          </div>
        );
      })}
        </form>
        <button onClick={submit}>Submit</button>
   
    </div>
  );
}

export default Form;
