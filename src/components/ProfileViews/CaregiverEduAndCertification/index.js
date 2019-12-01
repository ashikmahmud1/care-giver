import React from "react";
import MaterialTable from "material-table";

export default function CaregiverEduAndCertification() {
  const [state, setState] = React.useState({
    columns: [
      { title: "School/College/University", field: "school" },
      { title: "Degree", field: "degree" },
      { title: "Field Of Study", field: "fieldofstudy" }
    ],
    data: [
      { school: "Monipur High School", degree: "SSC", fieldofstudy: "Science" },
      {
        school: "Residential Model College",
        degree: "HSC",
        fieldofstudy: "Science"
      },
      {
        school: "Dhaka University",
        degree: "BSC",
        fieldofstudy: "Computer Science"
      }
    ]
  });

  return (
    <MaterialTable
      title="Add Your Educational History"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          })
      }}
    />
  );
}
