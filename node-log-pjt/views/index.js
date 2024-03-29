const url = "http://localhost:8080/api/logs";
const logTableBody = document.querySelector(".log-table-body");

const inputData = (data, idx) => {
  const sample = `
    <tr>
      <th scope="row">${idx}</th>
      <td>
        <div class="alert alert-primary" role="alert">${data.message}</div>
      </td>
      <td>${data.level}</td>
      <td>${data.timestamp}</td>
    </tr>
  `;
  return sample;
};

const getData = async () => {
  try {
    const response = await axios.get(url);
    if (response.data) {
      let trTags = "";
      response.data.forEach((data, idx) => {
        let trTag = inputData(data, idx);
        trTags += trTag;
      });
      logTableBody.innerHTML = trTags;
      console.log(response.data);
    }
  } catch (error) {
    console.log(error);
  }
};

getData();